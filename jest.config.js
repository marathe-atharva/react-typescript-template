module.exports = {
	testMatch: ['**/__tests__/**/*.(js|ts|tsx)'],
	testPathIgnorePatterns: [
		'<rootDir>/.next/',
		'<rootDir>/node_modules/',
		'<rootDir>/coverage',
		'<rootDir>/dist',
	],
}
