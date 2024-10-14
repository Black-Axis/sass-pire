module.exports = {
    watchPathIgnorePatterns: [],
    moduleFileExtensions: ["js", "scss"],
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.scss$": "jest-scss-transform"
    },
    testRegex: "tests/sass\\.test\\.js$"
};