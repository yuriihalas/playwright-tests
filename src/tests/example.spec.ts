import { test, expect } from '@playwright/test';

test('Github homepage loads correctly', async ({ page }) => {
    await page.goto('https://github.com/');
    expect(await page.locator('ul > li > button').count()).toBe(5);
    expect(page.url()).toBe('https://github.com/');
});
