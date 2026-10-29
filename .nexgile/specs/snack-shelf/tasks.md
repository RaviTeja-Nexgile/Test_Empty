# Tasks: Snack Shelf Before

- [x] 1. Project setup
  - Create package.json with the name "snack-shelf" and a test script that runs `node --test`, and a test file test/smoke.test.js with one passing test.
  - _Requirements: 1.1_
  - _Files: package.json, test/smoke.test.js_
  - _Verify: npm test_
  - _Issue: #1_
- [x] 2. Snack list
  - src/snacks.js exports list() and add(name), backed by an in-memory array; test/snacks.test.js tests both.
  - _Requirements: 1.1, 1.2_
  - _Depends: 1_
  - _Files: src/snacks.js, test/snacks.test.js_
  - _Verify: npm test_
  - _Issue: #2_
