import test from 'ava';
import { parseSearchParams, mergeSearchParams } from './search-params';

const SEARCH_STRING = 'q=hello&name=dan';

test('Parse search string', t => {
  t.deepEqual(parseSearchParams(SEARCH_STRING), { q: 'hello', name: 'dan' });
});

test('Merge search string', t => {
  t.is(mergeSearchParams(SEARCH_STRING, { age: 8 }), 'q=hello&name=dan&age=8');
});
