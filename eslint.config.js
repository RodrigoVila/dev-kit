import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from "eslint-plugin-unused-imports";

export default tseslint.config({
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ['**/*.{ts,tsx}'],
  ignores: ['dist'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    'simple-import-sort': simpleImportSort,
    'unused-imports': unusedImports
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // CSS + React-related packages come first.
          ["^.+\\.?(css)$", "^react", "^@?\\w"],
          // Library-package imports by sortOrder.
          ["^@?\\w", "^react", "^[^.]", "^\\."],
          // Empty line between different groups.
          [
            "^@context",
            "^@hooks",
            "^@artifacts",
            "^@features",
            "^@constants",
            "^@components",
            "^@layout",
            "^@utils",
            "^@types",
            "^@typechain-types",
            "^@assets",
          ],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./"],
          // Style imports.
          ["^.+\\.?(css)$"],
        ],
      },
    ],
  },
})
