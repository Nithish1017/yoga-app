# Yoga AI - End-to-End Test Automation Framework

This repository contains a production-ready, enterprise-grade End-to-End (E2E) Test Automation Framework for the **Yoga AI / Diabetic Wellness Pro** application.

It is built using **Node.js**, **Selenium WebDriver**, **Mocha**, and **Chai**, and integrates custom Excel reporting and **Dynamic Test Case Generation** using code-level validation scanning.

---

## Directory Structure

```
project-root/
├── .github/workflows/
│   └── selenium-e2e.yml     # CI/CD GitHub Actions workflow
├── config/
│   └── config.js            # Central environment variables & credentials config
├── excel/
│   └── E2E_Report.xlsx      # Generated multi-sheet Excel reports (created after run)
├── logs/
│   ├── combined.log         # Complete execution steps log
│   └── error.log            # Exception/failure steps log
├── pages/
│   ├── base.page.js         # Base Selenium actions & wait wrapper
│   ├── login.page.js        # Authentication page object
│   ├── dashboard.page.js    # Dashboard analytics and nav page object
│   ├── profile.page.js      # Profile details form page object
│   ├── health.page.js       # Health monitoring details page object
│   └── camera.page.js       # AI camera simulation page object
├── reports/
│   ├── E2E_HTML_Report.html # Mochawesome HTML test run reports
│   └── failures/            # Failures snapshots, stack traces, and console logs
├── tests/
│   ├── setup.js             # Global Mocha hooks, driver setup & Excel report generator
│   ├── e2e.spec.js          # Static E2E business workflows tests
│   └── dynamic.spec.js      # Dynamically generated validation & route tests
├── utilities/
│   ├── browser.helper.js    # Multi-browser builder helper (headed/headless)
│   ├── dynamic.analyzer.js  # HTML/JS validation code-scraper utility
│   ├── excel.reporter.js    # Custom ExcelJS reporter
│   ├── logger.js            # Winston console/file logging utility
│   └── screenshot.js        # Error snapshotting utility
├── package.json             # NPM package scripts & dependencies
├── .mocharc.json            # Mocha configurations
└── README.md                # Framework user guide
```

---

## Installation & Setup

1. **Install Node.js** (v18 or higher recommended).
2. **Install project dependencies** in the root directory:
   ```bash
   npm install
   ```

---

## Executing Tests Locally

Ensure the **Yoga AI** application is running locally before executing the automation suite:
* Frontend: `http://localhost:5185`
* Backend: `http://localhost:8000`
*(You can spin both up using the `setup_and_run.bat` script in the root)*

### Run Commands

* **Run all tests (Headless - default):**
  ```bash
  npm test
  ```
* **Run in Chrome (Headless):**
  ```bash
  npm run test:chrome
  ```
* **Run in Firefox (Headless):**
  ```bash
  npm run test:firefox
  ```
* **Run in Microsoft Edge (Headless):**
  ```bash
  npm run test:edge
  ```
* **Run in Headed mode (Visible Browser - Chrome):**
  ```bash
  npm run test:headed
  ```

---

## Advanced Framework Features

### 1. Dynamic Test Discovery & Scraper
Rather than relying purely on static, hardcoded test cases, the framework uses `utilities/dynamic.analyzer.js` to scan the application codebase (`frontend/index.html` and `frontend/app.js`) at compile time. It extracts:
* **All active routes:** e.g., `#screen-login`, `#screen-profile`, `#screen-health`, `#screen-dashboard`.
* **HTML5 constraint validators:** `required` inputs, `type="email"` matches, and number boundaries (`min`/`max` fields on age inputs).
* **JavaScript validations:** Code-level checks (like checking password length limits or matching fields).

Mocha loops through these discovered elements in `tests/dynamic.spec.js` to dynamically generate and execute validation tests against form controls and navigation routes.

### 2. Multi-Sheet Excel Reports
Upon test completion, the framework writes execution logs to `excel/E2E_Report.xlsx` with four dedicated sheets:
1. **Summary:** Key metrics including total run duration, test counts, pass rates, environment URLs, and dates.
2. **Test Cases:** Lists each test scenario, execution timings, target browsers, and final status (Passed/Failed).
3. **Failed Tests:** Outlines stack trace failure reasons and exact disk file paths to screenshots for any failed assertions.
4. **Execution Logs:** Chronological steps of input typings, clicks, and page transitions.

### 3. Failure Snapshotting
Whenever a test encounters a failed assertion or timeout:
* A screenshot is saved to `reports/failures/`.
* The browser console log history is exported to capture any runtime JavaScript console errors.
* A JSON report file compiling the exact URL, error stack trace, and console logs is saved alongside the screenshot.
