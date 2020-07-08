# dir-contents-object

Convert the contents of a directory to an object.

## Installation

```sh
yarn add dir-contents-object
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
