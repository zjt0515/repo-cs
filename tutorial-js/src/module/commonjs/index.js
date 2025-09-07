const delay = require('./delay')
const print = require('./print')
const config = require('./config')
async function run() {
  for (let index = 0; index < config.text.length; index++) {
    print(index)
    await delay(config.wordDuration)
  }
}
run()
