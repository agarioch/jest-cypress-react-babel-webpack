const path = require('path')
module.exports = {
  // jest to work in jsdom mode by default (and use jsdom to provide window)
  testEnvironment: 'jest-environment-jsdom',
  // directories to be treated like module directories (i.e. to match webpack config)
  moduleDirectories: [
    'node_modules',
    path.join(__dirname, 'src'),
    'shared',
    path.join(__dirname, 'test'),
  ],
  // replace module.css and .css imports with the replacement modules
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
  // provide more meaningful snapshots in place of emotion classnames
  snapshotSerializers: ['@emotion/jest/serializer'],
  // automatically import the file into all test files
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
}
