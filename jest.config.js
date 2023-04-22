module.exports = {
  clearMocks: true,
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|svg)$': '<rootDir>/styleMock.js'
  },
  testEnvironment: 'jsdom'
};
