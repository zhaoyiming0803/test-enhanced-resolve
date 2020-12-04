const path = require('path')

class BeforeResolvePlugin {
  constructor (source, mode, target) {
    this.source = source
    this.target = target
    this.mode = mode
    this.index = 0
  }
  
  apply (resolver) {
    const target = resolver.ensureHook(this.target);
    resolver.getHook(this.source).tapAsync('BeforeResolvePlugin', (request, resolveContext, callback) => {
      // console.log('request: ', request)
      // console.log('resolveContext: ', resolveContext)

      if (request.index >= 3) {
        return callback()
      }

      const resource = request.request
      const resourceExt = path.extname(request.request)
      const obj = Object.assign({}, request, {
        index: this.index++,
        request: resource.slice(0, resource.length - resourceExt.length) + `.${this.mode}` + resourceExt
      })
      resolver.doResolve(target, obj, 'hello world', resolveContext, callback)
    })
  }
}

module.exports = BeforeResolvePlugin