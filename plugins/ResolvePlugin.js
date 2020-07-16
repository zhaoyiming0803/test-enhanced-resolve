const path = require('path')

class BeforeResolvePlugin {
  constructor (source, target, mode) {
    this.source = source
    this.target = target
    this.mode = mode
  }
  
  apply (resolver) {
    const target = resolver.ensureHook(this.target);
    resolver.getHook(this.source).tapAsync('BeforeResolvePlugin', (request, resolveContext, callback) => {
      console.log('request: ', request)
      // console.log('resolveContext: ', resolveContext)

      const resource = request.request
      const resourceExt = path.extname(request.request)
      const obj = Object.assign({}, request, {
        mode: this.mode,
        request: resource.slice(0, resource.length - resourceExt.length) + `.${this.mode}` + resourceExt
      })
      resolver.doResolve(target, obj, null, resolveContext, callback)
    })
  }
}

module.exports = BeforeResolvePlugin