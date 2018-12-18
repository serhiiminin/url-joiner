import test from 'ava';
import { parseSearchParams } from '.';

test('Parse search string', t => {
  const SEARCH_STRING = 'q=hello&name=dan';
  t.deepEqual(parseSearchParams(SEARCH_STRING), { q: 'hello', name: 'dan' });
});
