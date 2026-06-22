import fs from 'fs';
import path from 'path';
import logger from './logger.js';

/**
 * Analyzes the frontend codebase dynamically to extract:
 * 1. Screens / routes (from HTML <section class="screen"> elements)
 * 2. Forms (from HTML <form> structures)
 * 3. Input constraints (HTML5 validation attributes)
 * 4. Custom validation rules in app.js (regex matching)
 */
export function analyzeApplication() {
    logger.info('Starting dynamic application analysis...');
    
    // Relative paths from project root
    const indexHtmlPath = path.resolve('frontend/index.html');
    const appJsPath = path.resolve('frontend/app.js');

    if (!fs.existsSync(indexHtmlPath) || !fs.existsSync(appJsPath)) {
        logger.warn('Frontend HTML/JS source files not found. Utilizing default fallback mapping.');
        return getDefaultAnalysis();
    }

    try {
        const htmlContent = fs.readFileSync(indexHtmlPath, 'utf8');
        const jsContent = fs.readFileSync(appJsPath, 'utf8');

        // 1. Discover Screens (defined by ID schema "screen-XYZ")
        const screenRegex = /id=["']screen-([^"']+)["']/g;
        const screens = [];
        let match;
        while ((match = screenRegex.exec(htmlContent)) !== null) {
            if (!screens.includes(match[1]) && match[1] !== 'container') {
                screens.push(match[1]);
            }
        }

        // 2. Discover Forms and Fields
        const formRegex = /<form\s+[^>]*id=["']([^"']+)["'][^>]*>([\s\S]*?)<\/form>/g;
        const forms = {};
        
        while ((match = formRegex.exec(htmlContent)) !== null) {
            const formId = match[1];
            const formInnerHtml = match[2];
            const fields = [];

            // Parse inputs, selects, and textareas inside form block
            const inputRegex = /<(input|select|textarea)\s+([^>]*?)>/g;
            let inputMatch;
            while ((inputMatch = inputRegex.exec(formInnerHtml)) !== null) {
                const tagName = inputMatch[1];
                const attrsString = inputMatch[2];
                
                const idMatch = /id=["']([^"']+)["']/.exec(attrsString);
                const typeMatch = /type=["']([^"']+)["']/.exec(attrsString);
                const nameMatch = /name=["']([^"']+)["']/.exec(attrsString);
                const required = /\brequired\b/.test(attrsString);
                const minMatch = /min=["']([^"']+)["']/.exec(attrsString);
                const maxMatch = /max=["']([^"']+)["']/.exec(attrsString);

                if (idMatch) {
                    fields.push({
                        id: idMatch[1],
                        tagName,
                        type: typeMatch ? typeMatch[1] : (tagName === 'select' ? 'select' : 'text'),
                        name: nameMatch ? nameMatch[1] : idMatch[1],
                        required,
                        min: minMatch ? minMatch[1] : null,
                        max: maxMatch ? maxMatch[1] : null
                    });
                }
            }
            forms[formId] = fields;
        }

        // 3. Extract JavaScript Validations using Regex
        const customRules = {
            passwordMinLength: 6,
            passwordsMustMatch: true,
            nameRequired: true
        };

        const pwLengthMatch = /password\.length\s*<\s*(\d+)/.exec(jsContent);
        if (pwLengthMatch) {
            customRules.passwordMinLength = parseInt(pwLengthMatch[1], 10);
        }

        const pwMatchCheck = /password\s*!==\s*confirmPassword/.test(jsContent);
        customRules.passwordsMustMatch = pwMatchCheck;

        logger.info(`Dynamic analysis complete. Discovered screens: [${screens.join(', ')}]. Discovered forms: [${Object.keys(forms).join(', ')}]`);
        return {
            screens,
            forms,
            customRules
        };
    } catch (e) {
        logger.error(`Error performing dynamic code analysis: ${e.message}. Using fallbacks.`);
        return getDefaultAnalysis();
    }
}

/**
 * Fallback baseline if source analysis fails.
 */
function getDefaultAnalysis() {
    return {
        screens: ['login', 'landing', 'dashboard', 'camera', 'library', 'health', 'analytics', 'settings', 'profile'],
        forms: {
            'auth-form': [
                { id: 'reg-name', tagName: 'input', type: 'text', required: false },
                { id: 'auth-email', tagName: 'input', type: 'email', required: true },
                { id: 'auth-password', tagName: 'input', type: 'password', required: true },
                { id: 'reg-confirm-password', tagName: 'input', type: 'password', required: false }
            ],
            'profile-form': [
                { id: 'profile-email', tagName: 'input', type: 'email', required: false },
                { id: 'profile-name', tagName: 'input', type: 'text', required: true },
                { id: 'profile-mobile', tagName: 'input', type: 'tel', required: true },
                { id: 'profile-age', tagName: 'input', type: 'number', required: true, min: '1', max: '120' },
                { id: 'profile-gender', tagName: 'select', type: 'select', required: false },
                { id: 'profile-diabetic', tagName: 'select', type: 'select', required: false }
            ]
        },
        customRules: {
            passwordMinLength: 6,
            passwordsMustMatch: true,
            nameRequired: true
        }
    };
}
