module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'react-native/no-inline-styles': 0,
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      env: {
        browser: true,
      },
      rules: {'react-native/no-inline-styles': 0},
    },
  ],
};
