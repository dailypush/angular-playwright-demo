import { chromium, Browser, Page, BrowserContext } from 'playwright';
import { Given, When, Then, BeforeAll, AfterAll, Before, After } from '@cucumber/cucumber';

let browser: Browser;
let page: Page;
let context: BrowserContext;

BeforeAll(async () => {
  browser = await chromium.launch();
});

AfterAll(async () => {
  await browser.close();
});

Before(async () => {
  context = await browser.newContext();
  page = await context.newPage();
});

After(async () => {
  await context.close();
});

Given('I am on the Angular app homepage', async () => {
  await page.goto('http://localhost:80');
});

When('I enter {string} in the input field', async (text: string) => {
  await page.fill('input', text);
});

When('I click the {string} button', async (buttonText: string) => {
  await page.click(`button:has-text("${buttonText}")`);
});

Then('I should see {string} displayed', async (expectedText: string) => {
  const displayText = await page.textContent('p');
  expect(displayText).toBe(expectedText);
});

Then('the counter value should be {int}', async (expectedValue: number) => {
  const counterValue = await page.textContent('p:has-text("Counter value:")');
  expect(counterValue).toBe(`Counter value: ${expectedValue}`);
});
