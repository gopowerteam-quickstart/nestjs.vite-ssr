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
    {
      files: ['src/**/*.{ts,vue}'],
      rules: {
        'vue/one-component-per-file': ['off'],
        'eslint-comments/no-unlimited-disable': ['off'],
      },
    },
  ],

}
