/** @type {import("@jest/types").Config.InitialOptions} */
const config = {
    preset: "ts-jest",
    globalSetup: "./test/setup.js",
    globalTeardown: "./test/teardown.js",
    testEnvironment: "./test/puppeteer_environment.js",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.jsx?$": "babel-jest"
    },
    moduleNameMapper: {
        "@src/(.*)": "<rootDir>/src/$1",
        "three/src/Three": "<rootDir>/node_modules/three/src/Three.js",
        "three/src/math/MathUtils": "<rootDir>/node_modules/three/src/math/MathUtils.js"
    },
    transformIgnorePatterns: [
        "<rootDir>/node_modules/(?!three|js-sdsl)"
    ],
    moduleDirectories: ["node_modules", "src"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    extensionsToTreatAsEsm: [".ts", ".tsx"],
    globals: {
        "ts-jest": {
            module: "commonjs"
        }
    },
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.ts",
        "!src/**/*.d.ts",
        "!src/**/*.test.ts",
        "!src/box2d.ts/*",
    ]
};

module.exports = config;
