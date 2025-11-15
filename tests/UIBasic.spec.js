// @ts-check
import { test, expect } from '@playwright/test';


test('First Playwright Test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

  await page.locator("#username").fill("rahulshettyacademy ");
  await page.locator("#password").fill("learning");
  await page.locator("#signInBtn").click();
  console.log(await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password.');

});
