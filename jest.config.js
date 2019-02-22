module.exports = {
  collectCoverage: true,
  testPathIgnorePatterns: ['node_modules', 'tmp/', 'dist/'],
  collectCoverageFrom: ['src/**/*.js*', '!src/**/__stubs__/**']
};
