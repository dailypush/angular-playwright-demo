import { chromium, Browser, Page, BrowserContext } from 'playwright';

let browser: Browser;
let context: BrowserContext;
let page: Page;

beforeAll(async () => {
  browser = await chromium.launch();
});

afterAll(async () => {
  await browser.close();
});

beforeEach(async () => {
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto('http://localhost:4200');
});

afterEach(async () => {
  await context.close();
});

describe('Angular Playwright Demo', () => {
    // it('should render title', () => {
    //     const fixture = TestBed.createComponent(AppComponent);
    //     fixture.detectChanges();
    //     const compiled = fixture.nativeElement as HTMLElement;
    //     expect(compiled.querySelector('.content')?.textContent).toContain('angular-playwright-demo');
    //   });
      
 
    it('should display entered text when the button is clicked', async () => {
    await page.fill('input', 'Hello Playwright!');
    await page.click('button');
    const displayText = await page.textContent('p');
    expect(displayText).toBe('Hello Playwright!');
  });

  it('should increment the counter when the increment button is clicked', async () => {
    await page.click('text=Increment');
    const counterValue = await page.textContent('p:has-text("Counter value:")');
    expect(counterValue).toBe('Counter value: 1');
  });

  it('should decrement the counter when the decrement button is clicked', async () => {
    await page.click('text=Increment');
    await page.click('text=Increment');
    await page.click('text=Decrement');
    const counterValue = await page.textContent('p:has-text("Counter value:")');
    expect(counterValue).toBe('Counter value: 1');
  });

  it('should not decrement the counter below zero', async () => {
    await page.click('text=Decrement');
    const counterValue = await page.textContent('p:has-text("Counter value:")');
    expect(counterValue).toBe('Counter value: 0');
  });
});
