import fs from 'fs';
import path from 'path';

export function generate300LoadTestCases() {
    const dirPath = path.resolve('loadtest');
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    const jsonPath = path.join(dirPath, 'loadtest_300_scenarios.json');
    const scenarios = [];

    // -------------------------------------------------------------
    // 1. Auth & Session Stress (50 Cases)
    // -------------------------------------------------------------
    for (let i = 1; i <= 50; i++) {
        const vus = 50 + (i * 100);
        scenarios.push({
            id: `LT_AUTH_${i.toString().padStart(3, '0')}`,
            category: 'Authentication & Session Stress',
            name: `Concurrent Auth Token Stress - ${vus} Virtual Users`,
            vus,
            targetEndpoint: '/api/auth/login',
            targetSlaMs: 200,
            expectedRps: 500 + (i * 50),
            httpMethod: 'POST'
        });
    }

    // -------------------------------------------------------------
    // 2. Diabetic Health & BMI API Stress (50 Cases)
    // -------------------------------------------------------------
    for (let i = 1; i <= 50; i++) {
        const weight = 50 + (i % 50);
        const height = 150 + (i % 40);
        scenarios.push({
            id: `LT_HLTH_${i.toString().padStart(3, '0')}`,
            category: 'Health Vitals & BMI API',
            name: `BMI Calculation Query (w=${weight}kg, h=${height}cm)`,
            weight,
            height,
            targetEndpoint: '/api/health/bmi',
            targetSlaMs: 50,
            expectedRps: 2000,
            httpMethod: 'POST'
        });
    }

    // -------------------------------------------------------------
    // 3. AI Camera Pose Landmark Stream Ingestion (50 Cases)
    // -------------------------------------------------------------
    const poses = ['Tadasana', 'Vajrasana', 'Vrikshasana', 'Bhujangasana', 'Uttanasana'];
    for (let i = 1; i <= 50; i++) {
        const pose = poses[i % poses.length];
        const fps = i % 2 === 0 ? 60 : 30;
        scenarios.push({
            id: `LT_POSE_${i.toString().padStart(3, '0')}`,
            category: 'AI Camera Pose Stream',
            name: `MediaPipe Pose Ingestion (${pose} @ ${fps} FPS)`,
            pose,
            fps,
            targetEndpoint: '/api/pose/stream',
            targetSlaMs: 33, // ~30ms for 30 FPS
            expectedRps: 1500,
            httpMethod: 'POST'
        });
    }

    // -------------------------------------------------------------
    // 4. YouTube Video CDN & Asset Bandwidth (50 Cases)
    // -------------------------------------------------------------
    for (let i = 1; i <= 50; i++) {
        const bitrate = 1000 + (i * 200);
        scenarios.push({
            id: `LT_CDN_${i.toString().padStart(3, '0')}`,
            category: 'CDN & Media Streaming',
            name: `Pose Tutorial HD Video Stream (${bitrate} Kbps)`,
            bitrateKbps: bitrate,
            targetEndpoint: '/assets/video/pose_demo.mp4',
            targetSlaMs: 150,
            expectedRps: 3000,
            httpMethod: 'GET'
        });
    }

    // -------------------------------------------------------------
    // 5. Analytics SVG Chart Data Query Stress (50 Cases)
    // -------------------------------------------------------------
    for (let i = 1; i <= 50; i++) {
        scenarios.push({
            id: `LT_ANL_${i.toString().padStart(3, '0')}`,
            category: 'Analytics & Trends Engine',
            name: `Weekly Posture Consistency Trend Query #${i}`,
            targetEndpoint: '/api/analytics/weekly',
            targetSlaMs: 100,
            expectedRps: 2500,
            httpMethod: 'GET'
        });
    }

    // -------------------------------------------------------------
    // 6. System Spike & Peak Concurrency Stress (50 Cases)
    // -------------------------------------------------------------
    for (let i = 1; i <= 50; i++) {
        const totalVus = 1000 + (i * 200);
        scenarios.push({
            id: `LT_SPK_${i.toString().padStart(3, '0')}`,
            category: 'System Spike & Capacity Limits',
            name: `Peak Capacity Burst Test - ${totalVus} Virtual Users`,
            vus: totalVus,
            targetEndpoint: '/api/system/health',
            targetSlaMs: 250,
            expectedRps: 5000,
            httpMethod: 'GET'
        });
    }

    fs.writeFileSync(jsonPath, JSON.stringify(scenarios, null, 2), 'utf8');
    console.log(`Successfully generated 300 load test scenarios JSON dataset at: ${jsonPath}`);
    return jsonPath;
}

generate300LoadTestCases();
