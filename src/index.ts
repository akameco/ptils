// check → https://github.com/kentcdodds/kcd-scripts/blob/v0.32.2/src/utils.js
import fs from 'fs'
import readPkgUp from 'read-pkg-up'
import has from 'lodash.has'
import arrify from 'arrify'

const { pkg } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
})

const hasPkgProp = (props: string[]) =>
  arrify(props).some(prop => has(pkg, prop))
const hasPkgSubProp = (pkgProp: string) => (props: string[] | string) =>
  hasPkgProp(arrify(props).map(p => `${pkgProp}.${p}`))
const ifPkgSubProp = (pkgProp: string) => (props: string[], t: any, f: any) =>
  hasPkgSubProp(pkgProp)(props) ? t : f

export const hasScript = hasPkgSubProp('scripts')
export const hasDep = hasPkgSubProp('dependencies')
export const hasDevDep = hasPkgSubProp('devDependencies')
export const hasPeerDep = hasPkgSubProp('peerDependencies')
export const hasAnyDep = (args: any) =>
  [hasDep, hasDevDep, hasPeerDep].some(fn => fn(args))

export const ifPeerDep = ifPkgSubProp('peerDependencies')
export const ifDep = ifPkgSubProp('dependencies')
export const ifDevDep = ifPkgSubProp('devDependencies')
export const ifAnyDep = (deps: string[], t: any, f: any) =>
  hasAnyDep(arrify(deps)) ? t : f
export const ifScript = ifPkgSubProp('scripts')
