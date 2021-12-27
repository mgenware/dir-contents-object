# dir-contents-object

[![Build Status](https://github.com/mgenware/dir-contents-object/workflows/Build/badge.svg)](https://github.com/mgenware/dir-contents-object/actions)
[![npm version](https://img.shields.io/npm/v/dir-contents-object.svg?style=flat-square)](https://npmjs.com/package/dir-contents-object)
[![Node.js Version](http://img.shields.io/node/v/dir-contents-object.svg?style=flat-square)](https://nodejs.org/en/)

Convert the contents of a directory to an object.

## Installation

```sh
npm i dir-contents-object
```

## Usage

```ts
import dirToObj from 'dir-contents-object';

(async () => {
  console.log(await dirToObj('./dir'));
})();

/**
  Prints:
  {
    a: {
      b: {
        'b.txt': '<file contents>',
      },
    },
    'a.txt': '<file contents>',
  }
*/
```
