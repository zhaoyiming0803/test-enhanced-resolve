class LogPlugin {
  constructor () {
    this.count = 0
  }
  
  apply (resolver) {    
    const target = resolver.ensureHook('after-result')

    resolver.getHook('before-result').tapAsync('LogPlugin', (request, resolveContext, callback) => {
      // if (this.count++) {
      //   return callback(resolveContext)
      // }
      const obj = Object.assign({}, request)
      resolver.doResolve(target, obj, 'hello world', resolveContext, callback)
    })
  }
}

module.exports = LogPlugin