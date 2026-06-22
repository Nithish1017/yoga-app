import os
import json
import time
from datetime import datetime
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List

app = FastAPI()

# Enable CORS for local dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_PATH = os.path.join(os.path.dirname(__file__), "db.json")

def load_db():
    if not os.path.exists(DB_PATH):
        # Fallback default
        default_db = {
            "users": [
                {
                    "email": "guest@example.com",
                    "password": "password123",
                    "name": "Guest User",
                    "mobile": "",
                    "age": "",
                    "gender": "Male",
                    "diabeticType": "None",
                    "avatar": ""
                }
            ],
            "currentUser": {
                "email": "guest@example.com",
                "name": "Guest User",
                "mobile": "",
                "age": "",
                "gender": "Male",
                "diabeticType": "None",
                "avatar": ""
            },
            "wellness": {
                "bloodSugar": [
                    { "date": "2026-05-04", "value": 110 },
                    { "date": "2026-05-05", "value": 115 },
                    { "date": "2026-05-06", "value": 108 },
                    { "date": "2026-05-07", "value": 120 },
                    { "date": "2026-05-08", "value": 112 },
                    { "date": "2026-05-09", "value": 105 },
                    { "date": "2026-05-10", "value": 100 }
                ],
                "hydration": 1.5,
                "steps": 8432,
                "streak": 12
            },
            "history": [
                { "id": 1, "date": "2026-05-09", "pose": "Surya Namaskar", "duration": "15m", "accuracy": 92 },
                { "id": 2, "date": "2026-05-08", "pose": "Vajrasana", "duration": "10m", "accuracy": 95 }
            ],
            "settings": {
                "darkMode": False,
                "notifications": True,
                "cameraPermission": True
            }
        }
        save_db(default_db)
        return default_db
    try:
        with open(DB_PATH, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading database: {e}")
        return {}

def save_db(data):
    try:
        with open(DB_PATH, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2)
    except Exception as e:
        print(f"Error saving database: {e}")

# Request Models
class LoginRequest(BaseModel):
    email: str
    password: str

class RegisterRequest(BaseModel):
    name: str
    email: str
    password: str

class HydrationRequest(BaseModel):
    amount: float

class SessionRequest(BaseModel):
    pose: str
    duration: str
    accuracy: float

class ProfileRequest(BaseModel):
    email: str
    name: str
    mobile: str
    age: str
    gender: str
    diabeticType: str
    avatar: str

@app.get("/api/wellness")
def get_wellness():
    db = load_db()
    return db.get("wellness", {})

@app.get("/api/history")
def get_history():
    db = load_db()
    return db.get("history", [])

@app.post("/api/register")
def register(req: RegisterRequest):
    db = load_db()
    if "users" not in db:
        db["users"] = []
    
    email_clean = req.email.strip().lower()
    
    # Check if user already exists
    for u in db["users"]:
        if u.get("email", "").strip().lower() == email_clean:
            raise HTTPException(status_code=400, detail="User already registered with this email.")
            
    # Add new user
    new_user = {
        "email": email_clean,
        "password": req.password,
        "name": req.name,
        "mobile": "",
        "age": "",
        "gender": "Male",
        "diabeticType": "None",
        "avatar": ""
    }
    db["users"].append(new_user)
    save_db(db)
    return {"success": True}

@app.post("/api/login")
def login(req: LoginRequest):
    db = load_db()
    email_clean = req.email.strip().lower()
    
    # Authenticate credentials
    user = None
    if "users" in db:
        for u in db["users"]:
            if u.get("email", "").strip().lower() == email_clean:
                if u.get("password") == req.password:
                    user = u
                    break
                else:
                    raise HTTPException(status_code=401, detail="Incorrect password. Please try again.")
    
    if not user:
        raise HTTPException(status_code=404, detail="User not found. Please register first.")
        
    user_copy = user.copy()
    if "password" in user_copy:
        del user_copy["password"]
        
    db["currentUser"] = user_copy
    save_db(db)
    
    # Return simple session token
    token = f"mock-session-token-for-{email_clean}"
    return {"success": True, "token": token, "user": user_copy}

@app.post("/api/hydration")
def update_hydration(req: HydrationRequest):
    db = load_db()
    if "wellness" not in db:
        db["wellness"] = {"hydration": 1.5, "steps": 0, "streak": 0}
    
    current_hydration = db["wellness"].get("hydration", 1.5)
    db["wellness"]["hydration"] = round(current_hydration + req.amount, 2)
    save_db(db)
    return {"hydration": db["wellness"]["hydration"]}

@app.post("/api/session")
def save_session(req: SessionRequest):
    db = load_db()
    if "history" not in db:
        db["history"] = []
    
    new_session = {
        "id": int(time.time() * 1000),
        "date": datetime.today().strftime('%Y-%m-%d'),
        "pose": req.pose,
        "duration": req.duration,
        "accuracy": req.accuracy
    }
    
    # Prepend to history
    db["history"].insert(0, new_session)
    save_db(db)
    return {"success": True}

@app.get("/api/profile")
def get_profile():
    db = load_db()
    return db.get("currentUser", {
        "email": "guest@example.com",
        "name": "Guest User",
        "mobile": "",
        "age": "",
        "gender": "Male",
        "diabeticType": "None",
        "avatar": ""
    })

@app.post("/api/profile")
def save_profile(req: ProfileRequest):
    db = load_db()
    email_clean = req.email.strip().lower()
    
    # Sync profile change to the user list
    if "users" in db:
        for u in db["users"]:
            if u.get("email", "").strip().lower() == email_clean:
                u["name"] = req.name
                u["mobile"] = req.mobile
                u["age"] = req.age
                u["gender"] = req.gender
                u["diabeticType"] = req.diabeticType
                u["avatar"] = req.avatar
                break
                
    user = {
        "email": req.email,
        "name": req.name,
        "mobile": req.mobile,
        "age": req.age,
        "gender": req.gender,
        "diabeticType": req.diabeticType,
        "avatar": req.avatar
    }
    db["currentUser"] = user
    save_db(db)
    return {"success": True, "user": user}
