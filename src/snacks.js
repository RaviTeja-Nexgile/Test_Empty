'use strict';

// In-memory store of snacks. Each entry is { name, count }.
const snacks = [];

/**
 * Return every snack in the shelf, each with its count.
 * A copy is returned so callers cannot mutate the store directly.
 * @returns {Array<{name: string, count: number}>}
 */
function list() {
  return snacks.map((snack) => ({ ...snack }));
}

/**
 * Add a snack to the shelf. Adding a name that already exists
 * increments its count instead of creating a duplicate entry.
 * @param {string} name
 * @returns {{name: string, count: number}} the stored snack
 */
function add(name) {
  if (typeof name !== 'string' || name.trim() === '') {
    throw new TypeError('Snack name must be a non-empty string');
  }

  const trimmed = name.trim();
  const existing = snacks.find((snack) => snack.name === trimmed);
  if (existing) {
    existing.count += 1;
    return { ...existing };
  }

  const snack = { name: trimmed, count: 1 };
  snacks.push(snack);
  return { ...snack };
}

module.exports = { list, add };
