let price = require('./lib/price')

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  global.fetch = require('node-fetch');
}

module.exports = price