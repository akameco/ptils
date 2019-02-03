// check → https://github.com/kentcdodds/kcd-scripts/blob/v0.32.2/src/utils.js
import fs from 'fs'
import readPkgUp from 'read-pkg-up'
import has from 'lodash.has'
import arrify from 'arrify'

const { pkg } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
})

const hasPkgProp = (props: string[]): boolean =>
  arrify(props).some(prop => has(pkg, prop))
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const hasPkgSubProp = (pkgProp: string) => (props: string[] | string) =>
  hasPkgProp(arrify(props).map(p => `${pkgProp}.${p}`))
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const ifPkgSubProp = (pkgProp: string) => <True, False>(
  props: string[],
  t: True,
  f: False
): True | False => (hasPkgSubProp(pkgProp)(props) ? t : f)

export const hasScript = hasPkgSubProp('scripts')
export const hasDep = hasPkgSubProp('dependencies')
export const hasDevDep = hasPkgSubProp('devDependencies')
export const hasPeerDep = hasPkgSubProp('peerDependencies')
export const hasAnyDep = (args: string | string[]): boolean =>
  [hasDep, hasDevDep, hasPeerDep].some(fn => fn(args))

export const ifPeerDep = ifPkgSubProp('peerDependencies')
export const ifDep = ifPkgSubProp('dependencies')
export const ifDevDep = ifPkgSubProp('devDependencies')
export const ifAnyDep = <True, False>(
  deps: string[],
  t: True,
  f: False
): True | False => (hasAnyDep(arrify(deps)) ? t : f)
export const ifScript = ifPkgSubProp('scripts')
