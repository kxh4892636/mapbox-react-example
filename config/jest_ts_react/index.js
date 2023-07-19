/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.ts?$": [
      "ts-jest",
      {
        isolatedModules: true,
        diagnostics: false,
      },
    ],
  }
};
