/** @type {import("jest").Config} */
module.exports = {
  testEnvironment: `jsdom`,
  testEnvironmentOptions: {
    url: "http://localhost",
  },
  testPathIgnorePatterns: ["node_modules", "\\.cache", "<rootDir>.*/public"],

  setupFiles: ["<rootDir>/loader.shim.js"],
  setupFilesAfterEnv: ["<rootDir>/tests.setup.js"],

  transform: {
    "^.+\\.jsx?$": "<rootDir>/jest.preprocess.js",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(gatsby|gatsby-script|gatsby-link)/)",
  ],

  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file.js",
  },

  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  coverageReporters: ["text", "lcov", "json", "html"],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: -10,
    },
  },

  globals: {
    __PATH_PREFIX__: "",
  },

  silent: true,
}
