module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'func-names': 0,
    'no-unused-vars': 0,
    'no-console': 0,
    'react/prop-types': 0,
    'arrow-body-style': 0,
    'import/no-named-as-default': 0,
    // 'import/prefer-default-export': 0,
    // 'prefer-default-export': 0,
  },
};
