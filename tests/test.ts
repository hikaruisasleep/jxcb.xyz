import { expect, test } from '@playwright/test';

test('landing page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'jxcb' })).toBeVisible();
});
