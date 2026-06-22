@echo off
echo === Yoga AI App — Setup and Run Script ===
echo.

cd /d "%~dp0frontend"

echo [1/4] Installing frontend dependencies...
call npm install

echo.
echo [2/4] Setting up python backend virtual environment...
cd /d "%~dp0backend"
if not exist ".venv" (
    echo Creating virtual environment .venv...
    python -m venv .venv
)

echo.
echo [3/4] Installing backend dependencies...
call .venv\Scripts\activate.bat
python -m pip install --upgrade pip
pip install -r requirements.txt

echo.
echo [4/4] Starting servers...
echo Starting frontend development server...
start cmd /k "cd /d %~dp0frontend && npm run dev"

echo Starting backend development server...
start cmd /k "cd /d %~dp0backend && .venv\Scripts\activate.bat && uvicorn main:app --reload"

echo.
echo === Setup Completed! ===
echo Frontend: http://localhost:5173
echo Backend:  http://localhost:8000
echo.
pause
