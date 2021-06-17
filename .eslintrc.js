module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
        project: './tsconfig.json',
        createDefaultProgram: true,
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    extends: [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:import/recommended',
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'prettier', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    plugins: ['@typescript-eslint'],
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. “@typescript-eslint/explicit-function-return-type”: “off”,
        eqeqeq: ['error', 'always'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-types': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
            { usePrettierrc: true },
        ],
        'no-duplicate-imports': 'error',
        'import/first': 'error',
        'import/named': 'off',
        'import/namespace': 'off',
        'import/no-unresolved': 'off',
        'import/no-named-as-default': 'off',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
            },
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: ['variable'],
                types: ['boolean', 'string', 'number', 'array'],
                format: ['camelCase'],
                leadingUnderscore: 'allow',
            },
            {
                selector: ['variable'],
                types: ['function'],
                format: ['camelCase', 'PascalCase'],
                leadingUnderscore: 'allow',
            },
            {
                selector: 'parameter',
                format: ['camelCase'],
                leadingUnderscore: 'allow',
            },
            {
                selector: 'interface',
                format: ['PascalCase'],
            },
            {
                selector: 'typeLike',
                format: ['PascalCase'],
            },
        ],
    },
};
