/* eslint no-console: 0 */

const {
  ThaiCardReader,
  EVENTS,
  MODE,
} = require('@privageapp/thai-national-id-reader')

const reader = new ThaiCardReader()
let IntervalMessages
reader.readMode = MODE.PERSONAL
reader.autoRecreate = true
reader.startListener()

console.log('Started listener...')

reader.on(EVENTS.CARD_INSERTED, () => {
  console.log('Card Inserted')
})

// on card remove
reader.on(EVENTS.CARD_REMOVED, () => {
  console.log('Card Removed')
  Logger.stopLogging()
})

// on first reading
reader.on(EVENTS.READING_INIT, () => {
  console.log('Initial Reading')
})

// on reading start
reader.on(EVENTS.READING_START, () => {
  console.log('Reading Start')
  Logger.startLogging()
})

// on reading fail
reader.on(EVENTS.READING_FAIL, () => {
  console.log('Reading Fail')
  Logger.stopLogging()
})

// on reading progress
reader.on(EVENTS.READING_PROGRESS, (progress) => {
  console.log('============================================')
  console.log(progress)
  console.log('============================================')
})

// on reading completed
reader.on(EVENTS.READING_COMPLETE, (obj) => {
  console.log('Reading Done')
  console.log(obj)
  Logger.stopLogging()
})

// on device disconnect
reader.on(EVENTS.DEVICE_DISCONNECTED, () => {
  console.log('Device Disconnect')
  Logger.stopLogging()
})

// logger ** noted prevent freeze on reading process **
const Logger = {
  startLogging() {
    IntervalMessages = setInterval(function () {
      console.log('.')
    }, 1000)
  },
  stopLogging() {
    clearInterval(IntervalMessages)
  },
}
