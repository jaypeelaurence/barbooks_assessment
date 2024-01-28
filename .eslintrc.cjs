module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/errors",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "vite*"],
  parser: "@typescript-eslint/parser",
  plugins: ["import", "react-refresh", "@tanstack/eslint-plugin-query"],
  rules: {
    "quotes": [2, "single", { "avoidEscape": true }],
    "linebreak-style": 0,
    "no-unused-vars": "error",
    "import/no-cycle": 0,
    "no-underscore-dangle": 0,
    "max-len": [2, 100],
    "import/no-unresolved": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal"],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react"],
        "newlines-between": "always"
      }
    ],
  },
};
