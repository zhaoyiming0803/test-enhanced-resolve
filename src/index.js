const fs = require('fs')
const { CachedInputFileSystem, ResolverFactory } = require('enhanced-resolve')
const path = require('path')

const myResolver = ResolverFactory.createResolver({
  fileSystem: new CachedInputFileSystem(fs, 4000),
  extensions: ['.json', '.js', '.ts'],
  plugins: []
})

const context = {}
const resolveContext = {
  log (msg) {
    console.log('msg--------:', msg)
  }
}
const lookupStartPath = path.resolve(__dirname)
const request = './interface/D'
// const request = 'tapables'
myResolver.resolve(context, lookupStartPath, request, resolveContext, (err, path, result) => {
	if (err) {
    console.log('createResolve err: ', err)
  } else {
    console.log('createResolve path: ', path)
    console.log('createResolve result: ', result)
  }
});