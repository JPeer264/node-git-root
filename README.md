# git-root

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
