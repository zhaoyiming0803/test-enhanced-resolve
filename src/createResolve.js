const fs = require("fs")
const { CachedInputFileSystem, ResolverFactory } = require("enhanced-resolve")
const ResolvePlugin = require('../plugins/ResolvePlugin')

// create a resolver
const myResolver = ResolverFactory.createResolver({
	fileSystem: new CachedInputFileSystem(fs, 4000),
  extensions: [".js", ".json"],
  plugins: [
    new ResolvePlugin('before-resolve', 'resolve', 'web')
  ]
	/* any other resolver options here. Options/defaults can be seen below */
});

// resolve a file with the new resolver
const context = {};
const resolveContext = {};
const lookupStartPath = __dirname;
const request = "./interface/D";
myResolver.resolve({}, lookupStartPath, request, resolveContext, (err, path, result) => {
	if (err) {
    console.log('createResolve err: ', err)
  } else {
    console.log('createResolve path: ', path)
    console.log('createResolve result: ', result)
  }
});