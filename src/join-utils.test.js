import test from 'ava';
import { joinRoute, joinUrl } from './join-utils';

test('Parse search string', t => {
  t.is(joinRoute({
    pathname: 'root',
    search: 'max=10',
    paths: ['user'],
    searchParams: { name: 'dan' }
  }), 'root/user?max=10&name=dan');
});

test('Merge search string', t => {
  t.is(joinUrl({
    url: 'https://serhiiminin.com',
    paths: ['user'],
    searchParams: { name: 'dan'}
  }), 'https://serhiiminin.com/user?name=dan');
});
