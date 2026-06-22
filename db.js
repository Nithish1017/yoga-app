let memoryStorage = {};
const safeStorage = {
    getItem(key) {
        try {
            return localStorage.getItem(key);
        } catch (e) {
            return memoryStorage[key] || null;
        }
    },
    setItem(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (e) {
            memoryStorage[key] = value;
        }
    }
};

const DB = {
    init() {
        if (!safeStorage.getItem('yoga_ai_db')) {
            const initialData = {
                users: [],
                currentUser: null,
                wellness: {
                    bloodSugar: [
                        { date: '2026-05-04', value: 110 },
                        { date: '2026-05-05', value: 115 },
                        { date: '2026-05-06', value: 108 },
                        { date: '2026-05-07', value: 120 },
                        { date: '2026-05-08', value: 112 },
                        { date: '2026-05-09', value: 105 },
                        { date: '2026-05-10', value: 100 }
                    ],
                    hydration: 1.5,
                    steps: 8432,
                    streak: 12
                },
                history: [
                    { id: 1, date: '2026-05-09', pose: 'Surya Namaskar', duration: '15m', accuracy: 92 },
                    { id: 2, date: '2026-05-08', pose: 'Vajrasana', duration: '10m', accuracy: 95 }
                ],
                settings: {
                    darkMode: false,
                    notifications: true,
                    cameraPermission: true
                }
            };
            safeStorage.setItem('yoga_ai_db', JSON.stringify(initialData));
        }
    },

    get() {
        try {
            const dbVal = safeStorage.getItem('yoga_ai_db');
            const data = dbVal ? JSON.parse(dbVal) : null;
            if (data) {
                // Ensure default structure exists (database migration fallback)
                if (!data.wellness) {
                    data.wellness = {
                        bloodSugar: [],
                        hydration: 1.5,
                        steps: 8432,
                        streak: 12
                    };
                }
                if (!data.history) data.history = [];
                if (!data.settings) data.settings = { darkMode: false };
                return data;
            }
        } catch (e) {}
        return {
            users: [],
            currentUser: null,
            wellness: { bloodSugar: [], hydration: 1.5, steps: 8432, streak: 12 },
            history: [],
            settings: { darkMode: false }
        };
    },

    save(data) {
        safeStorage.setItem('yoga_ai_db', JSON.stringify(data));
    }
};

DB.init();
export default DB;
