import codemaskConfig from 'eslint-config-codemask'

/**
 * @type {Array<import('eslint').Linter.FlatConfig>}
 */
export default [
    ...codemaskConfig,
    ...codemaskConfig,
    {
        rules: {
            '@typescript-eslint/naming-convention': 'off',
            '@typescript-eslint/indent': 'off',
            '@typescript-eslint/comma-dangle': 'off',
            'import/order': 'off',
            'react/no-children-prop': 'off',
            '@typescript-eslint/no-floating-promises': 'off',
            '@stylistic/comma-dangle': 'off',
        },
    },
]
