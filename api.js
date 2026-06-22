import DB from './db.js';

const API = {
    async delay(ms = 500) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    async getWellnessStats() {
        await this.delay(300);
        return DB.get().wellness;
    },

    async getHistory() {
        await this.delay(400);
        return DB.get().history;
    },

    async login(email, password) {
        await this.delay(1000);
        const db = DB.get();
        // Simple demo logic
        db.currentUser = { email, name: 'Nithish' };
        DB.save(db);
        return { success: true, user: db.currentUser };
    },

    async updateHydration(amount) {
        const db = DB.get();
        db.wellness.hydration += amount;
        DB.save(db);
        return db.wellness.hydration;
    },

    async saveSession(session) {
        const db = DB.get();
        db.history.unshift({
            id: Date.now(),
            date: new Date().toISOString().split('T')[0],
            ...session
        });
        DB.save(db);
        return { success: true };
    }
};

export default API;
