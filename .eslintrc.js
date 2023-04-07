module.exports = {
  extends: [
    '@gopowerteam/eslint-config',
  ],
  overrides: [
    {
      files: ['server/**/*.ts'],
      rules: {
        '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'no-type-imports' }],
      },
    },
  ],
}
