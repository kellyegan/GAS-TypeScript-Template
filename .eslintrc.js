module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    rules: {
      "no-use-before-define": [2, {"functions": false, "classes": false }],
      "@typescript-eslint/no-use-before-define": [2, {"functions": false, "classes": false }]
    }
  };