const {AsyncSeriesBailHook} = require('Tapable')

const hook = new AsyncSeriesBailHook(['a', 'b'])

hook.tapAsync('resolve', (a, b, callback) => {
  setTimeout(() => {
    console.log('0')
    callback()
  }, 1000)
})

hook.tapAsync('resolve', (a, b, callback) => {
  setTimeout(() => {
    console.log('1', a, b)
    callback(null, 121212121)
  }, 1000)
})

hook.tapAsync('resolve', (a, b, callback) => {
  setTimeout(() => {
    console.log('2', b, a)
    callback()
  }, 1000)
})

hook.callAsync('hello', 'world', (err, res) => {
  if (err) {
    console.log('err: ', err)
  } else {
    console.log('end', res)
  }
})