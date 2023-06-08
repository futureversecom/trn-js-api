/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "@trnja/api/(.*)$": ["<rootDir>/packages/api/src/$1"],
  },
};
