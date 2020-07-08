import * as assert from 'assert';
import getObject from '..';

it('Main', async () => {
  assert.deepEqual(await getObject('./tests/data'), {
    a: {
      b: {
        'b.txt': 'B',
      },
    },
    'a.txt': 'A',
  });
});
