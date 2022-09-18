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
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
