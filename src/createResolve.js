const fs = require("fs")
const { CachedInputFileSystem, ResolverFactory } = require("enhanced-resolve")
const ResolvePlugin = require('../plugins/ResolvePlugin')

// create a resolver
const myResolver = ResolverFactory.createResolver({
	fileSystem: new CachedInputFileSystem(fs, 4000),
  extensions: [".js", ".json"],
  plugins: [
    new ResolvePlugin('before-resolve', 'resolved', 'web')
  ]
	/* any other resolver options here. Options/defaults can be seen below */
});

// resolve a file with the new resolver
const context = {};
const resolveContext = {};
const lookupStartPath = __dirname;
const request = "./interface/A.js";
myResolver.resolve({}, lookupStartPath, request, resolveContext, (err, fileContext, filePath) => {
	if (err) {
    console.log('createResolve err: ', err)
  } else {
    console.log('createResolve fileContext: ', fileContext)
    console.log('createResolve filePath: ', filePath)
  }
});