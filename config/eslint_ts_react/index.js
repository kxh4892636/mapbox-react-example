// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: { browser: true, es2020: true, "jest/globals": true },
  extends: [
    "eslint:recommended",
    "standard",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsdoc/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["@typescript-eslint", "jsx-a11y", "promise", "import", "jest"],
  rules: {
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "array-element-newline": ["error", "consistent"],
    "max-len": ["error", { "code": 80 }]
  },
  settings: {
    react: {
      version: "detect",
    }
  },
};
