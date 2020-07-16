const resolve = require('enhanced-resolve')

const myResolve = resolve.create({
	extensions: [".ts", ".js"]
});

myResolve(__dirname, './interface/C', (err, result) => {
	if (err) {
    console.log('resolve.create err: ', err)
  } else {
    // /Users/didi/Desktop/test-enhanced-resolve/src/interface/C.js
    console.log('resolve.create result: ', result)
  }
});