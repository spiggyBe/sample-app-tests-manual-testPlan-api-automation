import { defineConfig } from '@playwright/test'
import dotenv from 'dotenv'
dotenv.config()

export default defineConfig({
  testDir: './tests',
  retries: 1,
  reporter: [
    ['html', { outputFolder: 'playwright-report' }]
  ],
  use: {
    baseURL: process.env.DEV === '1' ? 'https://sample-app.com' : 'https://other-sample-app.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium', //default
    },

    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
      },
    },
  ],
})
