module.exports = {
    roots: [
        '<rootDir>/test',
        '<rootDir>/src',
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: '(.*)(test).(ts)$',
    collectCoverage: false
};
