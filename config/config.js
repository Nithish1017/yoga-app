import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const config = {
    // Application under test
    baseUrl: process.env.BASE_URL || 'http://localhost:5185',
    backendUrl: process.env.BACKEND_URL || 'http://localhost:8000',

    // Test environment variables
    browser: process.env.BROWSER || 'chrome', // chrome | firefox | edge
    headless: process.env.HEADLESS !== 'false', // Defaults to true in CI/CD, can override to false for debugging

    // Timeout settings (in milliseconds)
    implicitWait: parseInt(process.env.TIMEOUT_IMPLICIT || '2000', 10),
    explicitWait: parseInt(process.env.TIMEOUT_EXPLICIT || '10000', 10),
    pageLoadTimeout: parseInt(process.env.TIMEOUT_PAGE_LOAD || '30000', 10),

    // Test execution configuration
    retries: parseInt(process.env.TEST_RETRIES || '1', 10), // Number of retry attempts for failed tests

    // Test Data
    testData: {
        validUser: {
            name: 'QA Automator',
            email: 'qa.automation@example.com',
            password: 'SecurePassword123!',
            mobile: '+12345678901',
            age: '28',
            gender: 'Male',
            diabeticType: 'Pre-diabetic'
        },
        invalidUser: {
            email: 'wrong.email@invalid.com',
            password: '123'
        }
    },

    // Report configuration paths
    paths: {
        reports: path.resolve('reports'),
        failures: path.resolve('reports/failures'),
        excel: path.resolve('excel'),
        logs: path.resolve('logs')
    }
};

export default config;
