module.exports = {
	clearMocks: true,
	moduleFileExtensions: ['ts', 'js'],
	testEnvironment: 'node',
	testMatch: ['**/*.test.ts', '**/*.spec.ts'],
	testRunner: 'jest-circus/runner',
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	verbose: true,
}
