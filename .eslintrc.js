module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: require.resolve("umi/eslint"),
  // extends: ["eslint:recommended", "plugin:react/recommended", "umi/eslint"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
  settings: {
    react: {
      version: "detect",
    },
  },
};
