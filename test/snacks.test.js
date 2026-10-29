'use strict';

const test = require('node:test');
const assert = require('node:assert');

const snacks = require('../src/snacks');

test('list() starts empty', () => {
  assert.deepStrictEqual(snacks.list(), []);
});

test('add() stores a snack with a count of 1', () => {
  const added = snacks.add('Pretzels');
  assert.deepStrictEqual(added, { name: 'Pretzels', count: 1 });
});

test('list() shows every added snack with its count', () => {
  snacks.add('Chips');
  snacks.add('Cookies');

  const names = snacks.list().map((snack) => snack.name);
  assert.ok(names.includes('Pretzels'));
  assert.ok(names.includes('Chips'));
  assert.ok(names.includes('Cookies'));

  const chips = snacks.list().find((snack) => snack.name === 'Chips');
  assert.strictEqual(chips.count, 1);
});

test('add() increments the count of an existing snack', () => {
  snacks.add('Cookies');
  const cookies = snacks.list().find((snack) => snack.name === 'Cookies');
  assert.strictEqual(cookies.count, 2);
});

test('list() returns a copy that cannot mutate the store', () => {
  const snapshot = snacks.list();
  snapshot[0].count = 999;
  snapshot.push({ name: 'Ghost', count: 1 });

  const fresh = snacks.list();
  assert.notStrictEqual(fresh[0].count, 999);
  assert.ok(!fresh.some((snack) => snack.name === 'Ghost'));
});

test('add() rejects an empty name', () => {
  assert.throws(() => snacks.add('   '), TypeError);
});
