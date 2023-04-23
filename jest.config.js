module.exports = {
  clearMocks: true,
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/styleMock.js',
    '\\.(svg|png|jpg|jpeg|tif|tiff|gif|bmp|eps|raw)$': '<rootDir>/styleMock.js'
  },
  testEnvironment: 'jsdom'
};
