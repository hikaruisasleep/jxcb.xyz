import js from '@eslint/js';
import globals from 'globals';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier/flat';

export default [
	js.configs.recommended,
	...ts.configs['flat/recommended'],
	...svelte.configs['flat/recommended'],
	prettier,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			},
			parserOptions: {
				extraFileExtensions: ['.svelte']
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: tsParser
			}
		}
	},
	{
		ignores: ['node_modules', 'build', '.svelte-kit', 'package', 'src/lib/posts/obsidian-vaults']
	},
	{
		rules: {
			// The app intentionally uses relative URLs (section links, postcards) whose
			// meaning depends on the current route; wrapping them in resolve() would change
			// where they point.
			'svelte/no-navigation-without-resolve': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_'
				}
			]
		}
	}
];
