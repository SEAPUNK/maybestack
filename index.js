module.exports = function (err) {
  return (err && err.stack) ? err.stack : err
}
