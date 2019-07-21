module.exports = {
  setupFilesAfterEnv: ['<rootDir>src/setupTest.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
    '^@App/(.*)$': '<rootDir>/src/$1',
    '^@Actions/(.*)$': '<rootDir>/src/actions/$1',
    '^@Reducers/(.*)$': '<rootDir>/src/reducers/$1',
    '^@Components/(.*)$': '<rootDir>/src/components/$1',
    '^@Common/(.*)$': '<rootDir>/src/components/common/$1',
    '^@Layout/(.*)$': '<rootDir>/src/components/layout/$1',
    '^@Pages/(.*)$': '<rootDir>/src/components/pages/$1',
    '^@Utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@Assets/(.*)$': '<rootDir>/src/assets/$1',
  }
}