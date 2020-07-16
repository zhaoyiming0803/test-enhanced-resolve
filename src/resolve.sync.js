const resolve = require("enhanced-resolve")

const result = resolve.sync(__dirname, './interface/B.js')

// /Users/didi/Desktop/test-enhanced-resolve/src/interface/B.js
console.log('result: ', result)