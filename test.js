// @flow weak
/* eslint global-require:0 */
jest.mock('read-pkg-up', () => ({
  sync: jest.fn(() => ({ pkg: {}, path: '/blah/package.json' })),
}))

let readPkgUpSyncMock

function mockPkg({ pkg = {}, path = '/blah/package.json' } /*: any */) {
  readPkgUpSyncMock.mockImplementationOnce(() => ({ pkg, path }))
}

beforeEach(() => {
  jest.resetModules()
  readPkgUpSyncMock = require('read-pkg-up').sync
})

test('hasAnyDep returns the true if package exist', () => {
  mockPkg({ pkg: { peerDependencies: { react: '*' } } })
  expect(require('.').hasAnyDep('react')).toBe(true)
  expect(require('.').hasAnyDep('preact')).toBe(false)
})

test('hasScript returns the true ', () => {
  mockPkg({ pkg: { scripts: { test: 'jest' } } })
  expect(require('.').hasScript('test')).toBe(true)
})
