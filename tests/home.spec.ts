import { test, expect } from '@playwright/test';

test.describe('Home Pag', () => {
    test('Open HomePage and verify title', async({ page }) => {
        await page.goto('https://practice.sdetunicorns.com/');
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    })
})