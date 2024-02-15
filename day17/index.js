const assert = require('assert');

let result=false;

// assert.ok(result, 'The result should be true');

let a=1;
// let b=2;
let b=1;

// assert.equal(a, b, 'The values should be equal');

let c=9
let d='9'
// assert.equal(c, d, 'The values should be equal');
assert.strictEqual(c, d, 'The values should be equal');