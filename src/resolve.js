const resolve = require('enhanced-resolve')

resolve(__dirname, './interface/A.js', (err, resourcePath, result) => {
    if (err) {
      console.log('resolve err: ', err)
    } else {
      console.log('resolve resourcePath: ', resourcePath)
      console.log('resolve result: ', result)
    }
})
