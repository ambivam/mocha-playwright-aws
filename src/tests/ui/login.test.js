import { chromium } from 'playwright';
import LoginPage from '../../pages/loginPage.js';
import dotenv from 'dotenv';
import logger from '../../utils/logger.js';

dotenv.config();

describe('SauceDemo Login', function () {
  this.timeout(5000);
  let browser, page, loginPage;

  before(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    await page.goto(process.env.BASE_URL);
  });

  it('should login successfully', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    logger.info('User logged in successfully');
  });

  after(async () => {
    await browser.close();
  });
});