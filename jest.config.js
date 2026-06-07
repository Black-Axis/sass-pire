export default {
    testEnvironment: "node",
    watchPathIgnorePatterns: [],
    moduleFileExtensions: ['js', 'scss'],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.scss$': 'jest-scss-transform',
    },
    testRegex: '(tests|packages/.*/tests)/sass\\.test\\.js$',
};
