/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	moduleNameMapper: {
		"@therootnetwork/api/(.*)$": ["<rootDir>/packages/api/src/$1"],
		"@therootnetwork/evm/(.*)$": ["<rootDir>/packages/evm/src/$1"],
		"@therootnetwork/api-types/(.*)$": ["<rootDir>/packages/api-types/src/$1"],
	},
};
