module.exports = {
	rootDir: "../",
	collectCoverageFrom: [
		"packages/**/*.js",
		"!src/**/*.test.js",
		"!src/**/*.spec.js",
		"!src/**/*.e2e.js",
	],
	cacheDirectory: "<rootDir>/jest_cache",
	moduleFileExtensions: ["ts", "js", "node", "json"],
	transform: {
		"^.+\\.(js|jsx)$": ["babel-jest", { rootMode: "upward" }],
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
	testMatch: ["/**/?(*.)+(hook).[jt]s?(x)"],
	testEnvironment: "jsdom",
	moduleNameMapper: {
		"@therootnetwork/api(.*)$": "<rootDir>/packages/api/src/$1",
		"@therootnetwork/types(.*)$": "<rootDir>/packages/types/src/$1",
		"@therootnetwork/type-definitions(.*)$": "<rootDir>/packages/type-definitions/src/$1",
	},
	modulePathIgnorePatterns: [
		"<rootDir>/packages/api/build",
		"<rootDir>/packages/types/build",
		"<rootDir>/packages/util/build",
	],
	testTimeout: 15000,
};
