module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/airbnb',
  ],
  rules: {
    'max-len': ['error', { code: 350 }],
    'no-restricted-properties': 'off',
    'no-console': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
