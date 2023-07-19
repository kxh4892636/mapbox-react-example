// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: { es2020: true, node: true, "jest/globals": true },
  extends: [
    "eslint:recommended",
    "standard",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsdoc/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:promise/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["@typescript-eslint","import", "promise", "jest"],
  rules: {
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "array-element-newline": ["error", "consistent"],
    "max-len": ["error", { "code": 80 }]
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ["tsconfig.json", "package/*/tsconfig.json"],
      },
      node: {
        project: ["tsconfig.json", "package/*/tsconfig.json"],
      },
    },
  },
};
