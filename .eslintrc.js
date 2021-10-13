module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'no-unused-vars': 0,
    'import/prefer-default-export': 'off',
    'no-confusing-arrow': 0,
    'arrow-parens': 0,
    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
    curly: 0,
    'jsx-a11y/label-has-associated-control': 0,
    'quote-props': 0,
  },
};
