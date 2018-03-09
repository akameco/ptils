# ptils

[![Build Status](https://travis-ci.org/akameco/ptils.svg?branch=master)](https://travis-ci.org/akameco/ptils)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> utils for package.json

## Install

```
$ yarn add --dev ptils
```

## Usage

```json
{
  "dependencies": {
    "react": "^16.0.0"
  }
}
```

```js
const { hasAnyDep } = require('ptils')

hasAnyDep('react')
//=> true

hasAnyDep('lodash')
//=> false
```

## API

### `hasAnyDep(pkg: string): boolean`

### `hasDep(pkg: string): boolean`

### `hasDevDep(pkg: string): boolean`

### `hasPeerDep(pkg: string): boolean`

### `hasScript(script: string): boolean`

## Original

https://github.com/kentcdodds/kcd-scripts/blob/v0.32.2/src/utils.js

Check [kentcdodds/kcd-scripts: CLI toolbox for common scripts for my projects](https://github.com/kentcdodds/kcd-scripts). It's awesome package!

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub>akameco</sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/ptils/commits?author=akameco "Code") [📖](https://github.com/akameco/ptils/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/ptils/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
