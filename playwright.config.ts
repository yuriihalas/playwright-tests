import { defineConfig } from '@playwright/test';
import {devices} from "playwright";

export default defineConfig({
    testDir: 'src/tests',
    timeout: 60_000,
    retries: 0,
    workers: 1,
    use: {
        headless: false, // Run in headless mode
        trace: 'off',
        video: 'off',
        screenshot: 'off',
        viewport: {width: 1720, height: 1080}
    },
    projects: [
        {
            name: 'Chromium',
            use: { ...devices['Desktop Chrome'] }, // Use Chromium-based browser
        },
        {
            name: 'Firefox',
            use: { ...devices['Desktop Firefox'] }, // Use Firefox browser
        },
    ],
});
