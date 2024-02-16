module.exports = {
  root: true,
  env: {
      browser: true,
      es2022: true,
  },
  extends: [
      'airbnb',
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
  ],
  overrides: [
      {
          env: {
              node: true,
          },
          files: ['.eslintrc.{js,cjs}'],
          parserOptions: {
              sourceType: 'script',
          },
      },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier', '@stylexjs'],
  rules: {
      '@typescript-eslint/indent': ['error', 4],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-indent': ['error', 4],
      'import/prefer-default-export': 'off',
      'react/require-default-props': 'off',
      'no-param-reassign': 'off',
      'react/jsx-props-no-spreading': 'off',
  },
  ignorePatterns: ['vite.config.ts', 'dist'],
};
