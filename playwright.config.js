export default {
  use: {
    headless: true,
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  reporter: [['line'], ['json', { outputFile: 'reports/results.json' }]],
};