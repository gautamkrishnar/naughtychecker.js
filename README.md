# naughtychecker.js

[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)
[![dependency](https://david-dm.org/gautamkrishnar/naughtychecker.js.svg)](https://david-dm.org/gautamkrishnar/naughtychecker.js.svg)
[![devDependency Status](https://david-dm.org/gautamkrishnar/naughtychecker.js/dev-status.svg)](https://david-dm.org/gautamkrishnar/naughtychecker.js#info=devDependencies)
[![Build Status](https://travis-ci.org/gautamkrishnar/naughtychecker.js.svg?branch=master)](https://travis-ci.org/gautamkrishnar/naughtychecker.js)
[![npm version](https://badge.fury.io/js/naughtychecker.svg)](https://badge.fury.io/js/naughtychecker)

A Node.js module to check for Naughty Strings - strings that have a high probability of causing issues when used as user-input data.


### Why Test Naughty Strings?
Even multi-billion dollar companies like Twitter use automated tests to validate the input. You can't tweet a zero-width space (U+200B) on Twitter:

![Example](http://i.imgur.com/HyDg2eV.gif)

It's required to prevent serious errors like "Internal Server Error" for unexpected user inputs during validation.


### Installation

Yarn:
```shell
  yarn add naughtychecker
```

npm:
```shell
  npm install naughtychecker --save
```


### Usage
Use an offline database of naughty strings ([blns.json](src/vendor/blns.json)) to validate the input word:
```js
import NaughtyChecker from 'naughtychecker'
const nc = new NaughtyChecker()

const fromLocal = async () => {
  try {
    const result = await nc.validate('naughty string', {useLocal: true})
    // looks good
  } catch (e) {
    // found naughty string
  }
}
```

Use an online database of naughty strings from [Big List of Naughty Strings](https://github.com/minimaxir/big-list-of-naughty-strings) to validate the input word:
```js
import NaughtyChecker from 'naughtychecker'
const nc = new NaughtyChecker()

const fromOnline = async () => {
  try {
    const result = await nc.validate('naughty string')
    // looks good
  } catch (e) {
    // found naughty string
  }
}
```


### Inspiration
This project is inspired from [Big List of Naughty Strings](https://github.com/minimaxir/big-list-of-naughty-strings) and uses the naughty strings list from that project.


### Contributing
Read the [CONTRIBUTING.md](CONTRIBUTING.md) to get started. Feel free to Clone the project and submit your improvements via pull requests. Always submit pull requests to the [develop](https://github.com/gautamkrishnar/naughtychecker.js/tree/develop) branch.

#### Maintainers
* [Gautam krishna R](https://github.com/gautamkrishnar)
* [Simon Li](https://github.com/siutsin)

#### Contributors
* [Rohit Jha](https://github.com/rohitjha)


#### Release History

* 1.0.0 Initial Release
* 1.0.1 Made a little more efficient
* 1.0.2 Minor performance improvements
* 2.0.0 Promisify NaughtyChecker
* 2.0.1 Minor changes

#### Stats
[![NPM](https://nodei.co/npm/naughtychecker.png?downloads=true&stars=true)](https://nodei.co/npm/naughtychecker/)

#### Liked it?
Hope you liked this module, don't forget to give it a star :star:
