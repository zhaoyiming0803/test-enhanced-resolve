const async = require('neo-async')

const timer = (timeout, callback) => {
  setTimeout(() => {
    callback(null, timeout)
  }, timeout)
}

async.parallel([
  callback => timer(1000, callback),
  callback => timer(2000, callback)
], (error, result) => {
  if (error) console.log(error) 
  else console.log(result)
})