const config = require('./config')

function print(index) {
  console.clear()
  console.log(config.text.slice(0, index + 1))
}

module.exports = print
