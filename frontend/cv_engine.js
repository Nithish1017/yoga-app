const CVEngine = {
    isTracking: false,
    points: [],

    startTracking(canvas) {
        this.isTracking = true;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.animate();
    },

    stopTracking() {
        this.isTracking = false;
    },

    animate() {
        if (!this.isTracking) return;

        const { width, height } = this.canvas;
        this.ctx.clearRect(0, 0, width, height);

        // Generate semi-random skeletal points around center
        const centerX = width / 2;
        const centerY = height / 2;
        const jitter = () => (Math.random() - 0.5) * 5;

        const skeleton = {
            head: { x: centerX + jitter(), y: centerY - 100 + jitter() },
            neck: { x: centerX + jitter(), y: centerY - 70 + jitter() },
            spine: { x: centerX + jitter(), y: centerY + jitter() },
            lShoulder: { x: centerX - 40 + jitter(), y: centerY - 60 + jitter() },
            rShoulder: { x: centerX + 40 + jitter(), y: centerY - 60 + jitter() },
            lElbow: { x: centerX - 60 + jitter(), y: centerY + jitter() },
            rElbow: { x: centerX + 60 + jitter(), y: centerY + jitter() }
        };

        this.drawSkeleton(skeleton);
        this.drawJointAngles(skeleton);
        requestAnimationFrame(() => this.animate());
    },

    drawSkeleton(s) {
        const ctx = this.ctx;
        ctx.strokeStyle = '#50C878';
        ctx.fillStyle = '#50C878';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(80, 200, 120, 0.5)';

        // Draw joints
        Object.values(s).forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
            ctx.fill();
        });

        // Draw bones
        ctx.beginPath();
        ctx.moveTo(s.head.x, s.head.y); ctx.lineTo(s.neck.x, s.neck.y);
        ctx.moveTo(s.neck.x, s.neck.y); ctx.lineTo(s.spine.x, s.spine.y);
        ctx.moveTo(s.neck.x, s.neck.y); ctx.lineTo(s.lShoulder.x, s.lShoulder.y);
        ctx.moveTo(s.neck.x, s.neck.y); ctx.lineTo(s.rShoulder.x, s.rShoulder.y);
        ctx.moveTo(s.lShoulder.x, s.lShoulder.y); ctx.lineTo(s.lElbow.x, s.lElbow.y);
        ctx.moveTo(s.rShoulder.x, s.rShoulder.y); ctx.lineTo(s.rElbow.x, s.rElbow.y);
        ctx.stroke();
    },

    drawJointAngles(s) {
        const ctx = this.ctx;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.font = 'bold 12px Inter';
        ctx.shadowBlur = 0;

        // Simulate angle calculations
        const angles = [
            { label: 'Neck: 180°', p: s.neck },
            { label: 'L-Elbow: 165°', p: s.lElbow },
            { label: 'R-Elbow: 162°', p: s.rElbow }
        ];

        angles.forEach(a => {
            ctx.fillText(a.label, a.p.x + 15, a.p.y + 5);
        });
    }
};

export default CVEngine;
