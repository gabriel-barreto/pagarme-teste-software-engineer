module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:jest/recommended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        'jest/globals': true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
        'prettier/prettier': 'error',
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'chai-expect/missing-assertion': 'error',
        'chai-expect/terminating-properties': 'warn',
    },
    plugins: ['prettier', 'jest', 'chai'],
};
