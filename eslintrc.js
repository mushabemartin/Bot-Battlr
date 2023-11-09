module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Switch: 'readonly',
  },
  extends: 'eslint:recommended',
  rules: {
    'react/prop-types': 'off', // Disable prop-types check
  'indent': ['error', 2], // Enforce 2-space indentation
  'quotes': ['error', 'single'], // Enforce single quotes for strings
  'semi': ['error', 'always'], // Require semicolons
  // Add more rules here
  },
};
