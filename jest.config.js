module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/*.stories.tsx',
    '!**/index.ts',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
