import js from '@eslint/js';
import globals from 'globals';
import tsEslint from 'typescript-eslint';
import reactX from 'eslint-plugin-react-x';
import prettier from 'eslint-plugin-prettier';
import reactDom from 'eslint-plugin-react-dom';
import reactHooks from 'eslint-plugin-react-hooks';
import prettierConfig from 'eslint-config-prettier';
import reactRefresh from 'eslint-plugin-react-refresh';
import perfectionist from 'eslint-plugin-perfectionist';

const languageOptions = {
	ecmaVersion: 'latest',
	sourceType: 'module',
	globals: { ...globals.browser, ...globals.node },
	parser: tsEslint.parser,
	parserOptions: {
		project: ['./tsconfig.node.json', './tsconfig.app.json'],
		tsconfigRootDir: import.meta.dirname,
	},
};

const extendsConfig = [js.configs.recommended, ...tsEslint.configs.recommended];

const plugins = {
	'@typescript-eslint': tsEslint.plugin,
	'react-hooks': reactHooks,
	'react-refresh': reactRefresh,
	'react-x': reactX,
	'react-dom': reactDom,
	perfectionist,
	prettier: prettier,
};

const settings = {
	perfectionist: {
		type: 'line-length',
		partitionByComment: true,
	},
};

const perfectionistRulesConfig = {
	'perfectionist/sort-imports': [
		'error',
		{
			type: 'alphabetical',
			order: 'asc',
			fallbackSort: { type: 'unsorted' },
			ignoreCase: true,
			specialCharacters: 'keep',
			internalPattern: ['^~/.+'],
			partitionByComment: false,
			partitionByNewLine: false,
			newlinesBetween: 'always',
			groups: [
				'react',
				{ newlinesBetween: 'never' },
				['builtin', 'external'],
				['internal', 'parent', 'sibling'],
				[
					'type',
					'internal-type',
					'parent-type',
					'sibling-type',
					'index-type',
				],
				'index',
				'style',
				'side-effect-style',
				['object', 'unknown'],
			],
			customGroups: {
				value: {
					react: ['^react$', '^react-.+'],
				},
				type: {
					react: ['^react$', '^react-.+'],
				},
			},
			environment: 'node',
		},
	],
	'perfectionist/sort-interfaces': [
		'error',
		{
			type: 'alphabetical',
			order: 'asc',
			fallbackSort: { type: 'unsorted' },
			ignoreCase: true,
			specialCharacters: 'keep',
			ignorePattern: [],
			partitionByComment: false,
			partitionByNewLine: false,
			newlinesBetween: 'ignore',
			groupKind: 'mixed',
		},
	],
	'perfectionist/sort-enums': [
		'error',
		{
			type: 'alphabetical',
			order: 'asc',
			fallbackSort: { type: 'unsorted' },
			ignoreCase: true,
			specialCharacters: 'keep',
			partitionByComment: false,
			partitionByNewLine: false,
			newlinesBetween: 'ignore',
			sortByValue: false,
			forceNumericSort: false,
		},
	],
	'perfectionist/sort-intersection-types': [
		'error',
		{
			type: 'alphabetical',
			order: 'asc',
			fallbackSort: { type: 'unsorted' },
			ignoreCase: true,
			specialCharacters: 'keep',
			partitionByComment: false,
			partitionByNewLine: false,
			newlinesBetween: 'ignore',
		},
	],
	'perfectionist/sort-objects': [
		'error',
		{
			type: 'alphabetical',
			order: 'asc',
			fallbackSort: { type: 'unsorted' },
			ignoreCase: true,
			specialCharacters: 'keep',
			partitionByComment: false,
			partitionByNewLine: false,
			newlinesBetween: 'ignore',
			objectDeclarations: true,
			destructuredObjects: true,
			styledComponents: true,
		},
	],
	'perfectionist/sort-jsx-props': [
		'error',
		{
			type: 'alphabetical',
			order: 'asc',
			fallbackSort: { type: 'unsorted' },
			ignoreCase: true,
			specialCharacters: 'keep',
			partitionByNewLine: false,
			newlinesBetween: 'ignore',
		},
	],
};

const commonRules = {
	'react-refresh/only-export-components': [
		'warn',
		{ allowConstantExport: true },
	],
	'react-hooks/exhaustive-deps': 'off',
	'no-console': 'warn',
	'react-dom/no-missing-button-type': 'off',
	'react-dom/no-unsafe-target-blank': 'off',
	'@typescript-eslint/no-confusing-void-expression': 'off',
	'prefer-promise-reject-errors': 'off',
	'@typescript-eslint/prefer-promise-reject-errors': 'off',
	'@typescript-eslint/no-unsafe-assignment': 'off',
	'@typescript-eslint/no-unsafe-member-access': 'off',
	'@typescript-eslint/no-unnecessary-condition': 'off',
	'@typescript-eslint/no-invalid-void-type': 'off',
	'@typescript-eslint/no-explicit-any': 'off',
	'react-x/no-children-to-array': 'off',
};

const prettierRulesConfig = {
	...prettierConfig.rules,
	'prettier/prettier': [
		'error',
		{
			useTabs: true,
			tabWidth: 4,
			semi: true,
			trailingComma: 'es5',
			singleQuote: true,
			jsxSingleQuote: true,
			printWidth: 80,
			arrowParens: 'avoid',
			endOfLine: 'lf',
		},
	],
};

const rules = {
	...reactX.configs['recommended-typescript'].rules,
	...reactHooks.configs.recommended.rules,
	...reactDom.configs.recommended.rules,
	...perfectionistRulesConfig,
	...prettierRulesConfig,
	...commonRules,
};

export default tsEslint.config({
	extends: extendsConfig,
	ignores: [
		'node_modules',
		'dist',
		'eslint.config.js',
		'vite.config.ts',
		'vitest.config.ts',
	],
	files: ['**/*.{js,jsx,ts,tsx}'],
	languageOptions,
	plugins,
	settings,
	rules,
});
