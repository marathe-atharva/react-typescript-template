module.exports = {
	parser: '@typescript-eslint/parser',
	root: true,
	env: {
		node: true,
		es6: true,
		browser: true,
		jest: true,
	},
	ignorePatterns: ['node_modules/*', 'build/*', 'webpack/*', '!.prettierrc.js'],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:jsx-a11y/recommended',
		'plugin:eslint-comments/recommended',
		'plugin:prettier/recommended',
	],
	rules: {
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/no-var-requires': 'off',
		'react/prop-types': 'off',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'prettier/prettier': ['error', {}, { usePrettierrc: true }],
		'import/extensions': 'off',
		'import/no-unresolved': 'error',
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					['parent', 'sibling', 'object', 'index'],
				],
				pathGroups: [
					{
						pattern: 'react',
						group: 'external',
						position: 'before',
					},
				],
				pathGroupsExcludedImportTypes: ['react'],
				'newlines-between': 'never',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
	},
}
