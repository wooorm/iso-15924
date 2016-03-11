// Dependencies:
var iso15924 = require('./index.js');

// Inspecting some values yields:
console.log('js', require('util').inspect(iso15924.slice(0, 10)));

// And the `length` computes to:
console.log('js', String(iso15924.length));
