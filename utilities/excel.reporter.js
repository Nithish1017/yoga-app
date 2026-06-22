import ExcelJS from 'exceljs';
import path from 'path';
import fs from 'fs';
import config from '../config/config.js';
import logger from './logger.js';

class ExcelReporter {
    constructor() {
        this.testCases = [];
        this.failedTests = [];
        this.executionLogs = [];
        this.startTime = null;
        this.endTime = null;
    }

    /**
     * Start the reporting session.
     */
    startSession() {
        this.startTime = new Date();
        logger.info('Excel reporting session started.');
    }

    /**
     * End the reporting session.
     */
    endSession() {
        this.endTime = new Date();
        logger.info('Excel reporting session ended.');
    }

    /**
     * Record a test case completion.
     */
    recordTestCase(id, moduleName, scenarioName, browser, status, startTime, endTime) {
        const duration = ((endTime - startTime) / 1000).toFixed(2) + 's';
        this.testCases.push({
            id,
            module: moduleName,
            scenarioName,
            browser,
            status,
            startTime: startTime.toISOString(),
            endTime: endTime.toISOString(),
            duration
        });
    }

    /**
     * Record a test failure.
     */
    recordFailure(testName, reason, screenshotPath, browser, url) {
        this.failedTests.push({
            testName,
            reason: reason || 'Unknown error',
            screenshotPath: screenshotPath || 'No screenshot captured',
            browser,
            url: url || 'N/A'
        });
    }

    /**
     * Add a step log entry.
     */
    logStep(testName, stepDescription, result, remarks = '') {
        const timestamp = new Date().toISOString();
        this.executionLogs.push({
            timestamp,
            testName,
            stepDescription,
            result,
            remarks
        });
        logger.info(`Step: [${testName}] - ${stepDescription} -> [${result}] ${remarks}`);
    }

    /**
     * Generate and write the final Excel workbook.
     */
    async generateReport() {
        try {
            this.endSession();
            
            const workbook = new ExcelJS.Workbook();
            workbook.creator = 'QA Automation Framework';
            workbook.lastModifiedBy = 'QA Automation Framework';
            workbook.created = new Date();

            const durationSec = ((this.endTime - this.startTime) / 1000).toFixed(2);
            const totalTests = this.testCases.length;
            const passed = this.testCases.filter(t => t.status === 'Passed').length;
            const failed = this.testCases.filter(t => t.status === 'Failed').length;
            const skipped = this.testCases.filter(t => t.status === 'Pending' || t.status === 'Skipped').length;
            const passRate = totalTests > 0 ? ((passed / (totalTests - skipped)) * 100).toFixed(1) + '%' : '0%';

            // --- Sheet 1: Summary ---
            const summarySheet = workbook.addWorksheet('Summary');
            summarySheet.columns = [
                { header: 'Execution Date', key: 'date', width: 22 },
                { header: 'Environment', key: 'env', width: 15 },
                { header: 'Total Tests', key: 'total', width: 12 },
                { header: 'Passed', key: 'passed', width: 10 },
                { header: 'Failed', key: 'failed', width: 10 },
                { header: 'Skipped', key: 'skipped', width: 10 },
                { header: 'Pass Percentage', key: 'passRate', width: 18 },
                { header: 'Execution Duration', key: 'duration', width: 20 }
            ];
            
            summarySheet.addRow({
                date: this.startTime.toLocaleString(),
                env: config.baseUrl,
                total: totalTests,
                passed,
                failed,
                skipped,
                passRate,
                duration: `${durationSec}s`
            });
            
            // Format Summary Header
            summarySheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFF' } };
            summarySheet.getRow(1).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: '2C3E50' }
            };

            // --- Sheet 2: Test Cases ---
            const tcSheet = workbook.addWorksheet('Test Cases');
            tcSheet.columns = [
                { header: 'Test ID', key: 'id', width: 12 },
                { header: 'Module', key: 'module', width: 18 },
                { header: 'Scenario Name', key: 'scenarioName', width: 40 },
                { header: 'Browser', key: 'browser', width: 12 },
                { header: 'Status', key: 'status', width: 12 },
                { header: 'Start Time', key: 'startTime', width: 24 },
                { header: 'End Time', key: 'endTime', width: 24 },
                { header: 'Duration', key: 'duration', width: 12 }
            ];

            this.testCases.forEach(tc => {
                const row = tcSheet.addRow(tc);
                const statusCell = row.getCell('status');
                if (tc.status === 'Passed') {
                    statusCell.font = { color: { argb: '27AE60' }, bold: true };
                } else if (tc.status === 'Failed') {
                    statusCell.font = { color: { argb: 'C0392B' }, bold: true };
                } else {
                    statusCell.font = { color: { argb: 'F39C12' }, bold: true };
                }
            });

            tcSheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFF' } };
            tcSheet.getRow(1).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: '2980B9' }
            };

            // --- Sheet 3: Failed Tests ---
            const failSheet = workbook.addWorksheet('Failed Tests');
            failSheet.columns = [
                { header: 'Test Name', key: 'testName', width: 35 },
                { header: 'Failure Reason', key: 'reason', width: 50 },
                { header: 'Screenshot Path', key: 'screenshotPath', width: 60 },
                { header: 'Browser', key: 'browser', width: 12 },
                { header: 'URL', key: 'url', width: 35 }
            ];

            this.failedTests.forEach(f => {
                failSheet.addRow(f);
            });

            failSheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFF' } };
            failSheet.getRow(1).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'C0392B' }
            };

            // --- Sheet 4: Execution Logs ---
            const logSheet = workbook.addWorksheet('Execution Logs');
            logSheet.columns = [
                { header: 'Timestamp', key: 'timestamp', width: 24 },
                { header: 'Test Name', key: 'testName', width: 35 },
                { header: 'Step Description', key: 'stepDescription', width: 50 },
                { header: 'Result', key: 'result', width: 12 },
                { header: 'Remarks', key: 'remarks', width: 30 }
            ];

            this.executionLogs.forEach(el => {
                const row = logSheet.addRow(el);
                const resCell = row.getCell('result');
                if (el.result === 'Pass') {
                    resCell.font = { color: { argb: '27AE60' } };
                } else if (el.result === 'Fail') {
                    resCell.font = { color: { argb: 'C0392B' }, bold: true };
                }
            });

            logSheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFF' } };
            logSheet.getRow(1).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: '7F8C8D' }
            };

            // Ensure output directory exists
            const excelDir = config.paths.excel;
            if (!fs.existsSync(excelDir)) {
                fs.mkdirSync(excelDir, { recursive: true });
            }

            const reportPath = path.join(excelDir, 'E2E_Report.xlsx');
            await workbook.xlsx.writeFile(reportPath);
            logger.info(`Excel report saved successfully to: ${reportPath}`);
            return reportPath;
        } catch (error) {
            logger.error(`Failed to generate Excel report: ${error.message}`);
            logger.error(error.stack);
        }
    }
}

const excelReporter = new ExcelReporter();
export default excelReporter;
