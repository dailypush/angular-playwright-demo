module.exports = {
    preset: 'jest-playwright-preset',
    testMatch: ['**/features/**/*.ts'],
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
    setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironmentOptions: {
      'jest-playwright': {
        browsers: ['chromium'],
        launchOptions: {
          headless: true,
        },
      },
    },
  };
  