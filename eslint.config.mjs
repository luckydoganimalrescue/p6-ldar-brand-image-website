import antfu from '@antfu/eslint-config'
import nextPlugin from '@next/eslint-plugin-next'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tailwindcss from 'eslint-plugin-tailwindcss'

export default antfu({
  ignores: [
    '.github/',
    '.pnpm-store/',
    '.vscode/',
    '.mergify.yml',
    'next-env.d.ts',
    'out/',
    'package.json',
    'src/dotenv.ts',
    'src/pages/index.tsx',
    'tsconfig.json',
  ],
  plugins: {
    react,
    'react-hooks': reactHooks,
    'next': nextPlugin,
    tailwindcss,
  },
  extends: ['next/core-web-vitals'],
  languageOptions: {
    ecmaVersion: 'latest',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'next/no-img-element': 'error',
    // 'next/no-page-custom-font': 'error',
    'next/no-sync-scripts': 'error',
    'next/google-font-display': 'error',
    'next/no-css-tags': 'error',
    'next/no-document-import-in-page': 'error',
    'next/next-script-for-ga': 'error',
    'next/no-html-link-for-pages': 'error',
    'next/no-assign-module-variable': 'error',
    'next/no-before-interactive-script-outside-document': 'error',
    'tailwindcss/classnames-order': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
})
