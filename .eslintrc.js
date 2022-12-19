module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json'
    },
    extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended'
    ],
    rules: {
        'no-restricted-imports': ['error', {
            patterns: [ './*', '../*' ]
        }],
        'react/prop-types': 0,
        'class-methods-use-this': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'jsx-a11y/label-has-associated-control': [2, {
            controlComponents: [ 'MultipleDropdown' ],
            depth: 2,
        }],
    }
};
