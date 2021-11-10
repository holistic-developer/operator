module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:import/typescript', // this is needed because airbnb uses eslint-plugin-import
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        tsx: 'never',
        ts: 'never',
      },
    ],
    'import/no-cycle': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'no-use-before-define': 'off',
    'prettier/prettier': ['error'],
  },
};
