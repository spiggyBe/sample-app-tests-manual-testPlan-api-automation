import { test, expect } from '@playwright/test'
import { userData } from '../fixtures/userData'
import { urlAndAuthorizationData } from '../fixtures/urlAndAuthorizationData'
import anyDataPO from '../page-object-model/anyData/someObjectModelPO'


////// Important
////This is just very simple Presentation of automation scripts and does not work ;) this is just visualization
//

test.describe('Like and Observations in Daycare Web App', () => {


  test('should create a new observation and show success message', async ({ page }) => {
    
    await page.goto('https://daycare-web-app.example.com');
    await page.fill('#username', 'staffUser');
    await page.fill('#password', 'secret123');
    await page.click('#loginButton');
    await page.click('#addObservationBtn');
    await page.fill('#observationTitle', "New Observation - Nap Time");
    await page.fill('#observationDescription', "Kids took a nap from 12:00 to 12:30");
    await page.click('#saveObservationBtn');
    const successToast = await page.locator('.toast-success');
    await expect(successToast).toContainText('Observation created successfully');
  });

  
  test('should display observation list with at least one item', async ({ page }) => {
    await page.goto('https://daycare-web-app.example.com');
    await page.fill('#username', 'staffUser');
    await page.fill('#password', 'secret123');
    await page.click('#loginButton');
    await page.click('#observationsMenu');
    const observations = await page.locator('.observation-item');
    await expect(observations).toHaveCountGreaterThan(0);
  });
});
