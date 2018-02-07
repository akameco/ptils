// @flow weak
// check → https://github.com/kentcdodds/kcd-scripts/blob/v0.32.2/src/utils.js
const fs = require('fs')
const readPkgUp = require('read-pkg-up')
const has = require('lodash.has')
const arrify = require('arrify')

const { pkg } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
})

const hasPkgProp = props => arrify(props).some(prop => has(pkg, prop))
const hasPkgSubProp = pkgProp => props =>
  hasPkgProp(arrify(props).map(p => `${pkgProp}.${p}`))

const hasScript = hasPkgSubProp('scripts')
const hasDep = hasPkgSubProp('dependencies')
const hasDevDep = hasPkgSubProp('devDependencies')
const hasPeerDep = hasPkgSubProp('peerDependencies')
const hasAnyDep = args => [hasDep, hasDevDep, hasPeerDep].some(fn => fn(args))

const ifPkgSubProp = pkgProp => (props, t, f) =>
  hasPkgSubProp(pkgProp)(props) ? t : f

const ifPeerDep = ifPkgSubProp('peerDependencies')
const ifDep = ifPkgSubProp('dependencies')
const ifDevDep = ifPkgSubProp('devDependencies')
const ifAnyDep = (deps, t, f) => (hasAnyDep(arrify(deps)) ? t : f)
const ifScript = ifPkgSubProp('scripts')

module.exports = {
  hasScript,
  hasDep,
  hasDevDep,
  hasPeerDep,
  hasAnyDep,
  ifAnyDep,
  ifPeerDep,
  ifDep,
  ifDevDep,
  ifScript,
}
