var exists = require('deep-exists')

module.exports = function (err) {
  return exists(err, 'stack') ? err.stack : err
}
