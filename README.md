# git-root

[![Build Status](https://travis-ci.org/JPeer264/node-git-root.svg?branch=master)](https://travis-ci.org/JPeer264/node-git-root)
[![Build status](https://ci.appveyor.com/api/projects/status/4rqo2xdyr5wb72g5/branch/master?svg=true)](https://ci.appveyor.com/project/JPeer264/node-git-root/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/JPeer264/node-git-root/badge.svg?branch=master)](https://coveralls.io/github/JPeer264/node-git-root?branch=master)

Get synchronously the git root path

## Installation

```sh
$ npm i git-root --save
```
or
```sh
$ yarn add git-root
```

## Usage

Returns:
- String: The git root **or** empty string if it is not a git repository

```js
const gitRoot = require('git-root');

gitRoot(); // '' or git root of process.cwd()
gitRoot('any/git/repo'); // '' or git root of the directory 'any/git/repo'
```

## LICENSE

MIT © [Jan Peer Stöcklmair](https://www.jpeer.at)
