import type { Config } from 'jest'
import nextJest from 'next/jest'

// Adjust the path to your Next.js app's root directory
const createJestConfig = nextJest({
  dir: './src',
})

const customJestConfig: Config = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['<rootDir>/test/**/*.test.{ts,tsx}'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],

  transform: {
    '^.+\\.(ts|tsx)$': '@swc/jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.tsx'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
}

export default createJestConfig(customJestConfig)
