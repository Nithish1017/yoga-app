const getApiUrl = (path) => {
    // Check if running in a native webview (Capacitor)
    const isCapacitor = window.location.origin.startsWith('capacitor://') || 
                        (window.location.origin.startsWith('http://localhost') && !window.location.port);
    
    if (isCapacitor) {
        let savedIp = localStorage.getItem('backend_ip') || '192.168.137.1';
        let savedPort = localStorage.getItem('backend_port') || '8000';
        
        const base = (savedIp.startsWith('http://') || savedIp.startsWith('https://'))
            ? savedIp
            : `http://${savedIp}:${savedPort}`;
            
        return `${base}${path}`;
    }
    return path;
};

const getLocalUsers = () => {
    try {
        return JSON.parse(localStorage.getItem('local_users')) || [
            { email: 'guest@example.com', password: 'password123', name: 'Guest User' }
        ];
    } catch (e) {
        return [{ email: 'guest@example.com', password: 'password123', name: 'Guest User' }];
    }
};

const saveLocalUsers = (users) => {
    localStorage.setItem('local_users', JSON.stringify(users));
};

const API = {
    async getWellnessStats() {
        try {
            const response = await fetch(getApiUrl('/api/wellness'));
            if (!response.ok) throw new Error("Server error");
            const data = await response.json();
            localStorage.setItem('local_wellness', JSON.stringify(data));
            return data;
        } catch (error) {
            console.warn("Error getting wellness stats, using local cache:", error);
            try {
                const local = localStorage.getItem('local_wellness');
                if (local) return JSON.parse(local);
            } catch (e) {}
            return { streak: 12, hydration: 1.5, steps: 8432 };
        }
    },

    async getHistory() {
        try {
            const response = await fetch(getApiUrl('/api/history'));
            if (!response.ok) throw new Error("Server error");
            const data = await response.json();
            localStorage.setItem('local_history', JSON.stringify(data));
            return data;
        } catch (error) {
            console.warn("Error getting history, using local cache:", error);
            try {
                const local = localStorage.getItem('local_history');
                if (local) return JSON.parse(local);
            } catch (e) {}
            return [
                { id: 1, date: "2026-05-09", pose: "Surya Namaskar", duration: "15m", accuracy: 92 },
                { id: 2, date: "2026-05-08", pose: "Vajrasana", duration: "10m", accuracy: 95 }
            ];
        }
    },

    async login(email, password) {
        try {
            const response = await fetch(getApiUrl('/api/login'), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (!response.ok) {
                return { success: false, error: data.detail || 'Incorrect email or password.' };
            }
            return data;
        } catch (error) {
            console.warn("Backend login failed, using offline verification:", error);
            const users = getLocalUsers();
            const user = users.find(u => u.email.toLowerCase() === email.trim().toLowerCase());
            if (!user) {
                return { success: false, error: 'User not found. Try registering first.' };
            }
            if (user.password !== password) {
                return { success: false, error: 'Incorrect password.' };
            }
            return {
                success: true,
                token: `mock-offline-token-for-${user.email}`,
                user: { email: user.email, name: user.name }
            };
        }
    },

    async register(name, email, password) {
        try {
            const response = await fetch(getApiUrl('/api/register'), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });
            const data = await response.json();
            if (!response.ok) {
                return { success: false, error: data.detail || 'Registration failed.' };
            }
            return data;
        } catch (error) {
            console.warn("Backend registration failed, using offline registration:", error);
            const users = getLocalUsers();
            const emailClean = email.trim().toLowerCase();
            if (users.some(u => u.email.toLowerCase() === emailClean)) {
                return { success: false, error: 'User already registered with this email.' };
            }
            users.push({ name, email: emailClean, password });
            saveLocalUsers(users);
            return { success: true };
        }
    },

    async updateHydration(amount) {
        try {
            const response = await fetch(getApiUrl('/api/hydration'), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount })
            });
            if (!response.ok) throw new Error("Server error");
            const data = await response.json();
            
            // Sync to cache
            try {
                const local = JSON.parse(localStorage.getItem('local_wellness')) || { streak: 12, steps: 8432 };
                local.hydration = data.hydration;
                localStorage.setItem('local_wellness', JSON.stringify(local));
            } catch (e) {}
            
            return data.hydration;
        } catch (error) {
            console.warn("Error updating hydration, using local cache:", error);
            let current = 1.5;
            try {
                const local = JSON.parse(localStorage.getItem('local_wellness')) || { hydration: 1.5 };
                current = local.hydration !== undefined ? local.hydration : 1.5;
            } catch (e) {}
            const next = parseFloat((current + amount).toFixed(2));
            try {
                const local = JSON.parse(localStorage.getItem('local_wellness')) || { streak: 12, steps: 8432 };
                local.hydration = next;
                localStorage.setItem('local_wellness', JSON.stringify(local));
            } catch (e) {}
            return next;
        }
    },

    async saveSession(session) {
        try {
            const response = await fetch(getApiUrl('/api/session'), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(session)
            });
            if (!response.ok) throw new Error("Server error");
            const data = await response.json();
            
            // Prepend to local cache
            try {
                const history = JSON.parse(localStorage.getItem('local_history')) || [];
                const newSession = {
                    id: Date.now(),
                    date: new Date().toISOString().split('T')[0],
                    pose: session.pose,
                    duration: session.duration,
                    accuracy: session.accuracy
                };
                history.unshift(newSession);
                localStorage.setItem('local_history', JSON.stringify(history));
            } catch (e) {}
            
            return data;
        } catch (error) {
            console.warn("Error saving session, using local cache:", error);
            try {
                const history = JSON.parse(localStorage.getItem('local_history')) || [
                    { id: 1, date: "2026-05-09", pose: "Surya Namaskar", duration: "15m", accuracy: 92 },
                    { id: 2, date: "2026-05-08", pose: "Vajrasana", duration: "10m", accuracy: 95 }
                ];
                const newSession = {
                    id: Date.now(),
                    date: new Date().toISOString().split('T')[0],
                    pose: session.pose,
                    duration: session.duration,
                    accuracy: session.accuracy
                };
                history.unshift(newSession);
                localStorage.setItem('local_history', JSON.stringify(history));
            } catch (e) {}
            return { success: true };
        }
    },

    async getProfile() {
        try {
            const response = await fetch(getApiUrl('/api/profile'));
            if (!response.ok) throw new Error("Server error");
            const data = await response.json();
            localStorage.setItem('local_profile', JSON.stringify(data));
            return data;
        } catch (error) {
            console.warn("Error getting profile, using local cache:", error);
            try {
                const local = localStorage.getItem('local_profile');
                if (local) return JSON.parse(local);
            } catch (e) {}
            return { email: 'guest@example.com', name: 'Guest User', mobile: '', age: '', gender: 'Male', diabeticType: 'None', avatar: '' };
        }
    },

    async saveProfile(profileData) {
        try {
            const response = await fetch(getApiUrl('/api/profile'), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(profileData)
            });
            if (!response.ok) throw new Error("Server error");
            const data = await response.json();
            localStorage.setItem('local_profile', JSON.stringify(profileData));
            return data;
        } catch (error) {
            console.warn("Error saving profile, using local cache:", error);
            localStorage.setItem('local_profile', JSON.stringify(profileData));
            return { success: true, user: profileData };
        }
    }
};

export default API;
