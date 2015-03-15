var fs = require('fs');

var ResolveLoader = function (targetRequire, options) {
  this.require = targetRequire;
  this.options = options;
};

ResolveLoader.prototype.getSource = function (name) {
  var path = this.require.resolve(name);
  var src = fs.readFileSync(path, 'utf8');
  
  return {
    src: src,
    path: path
  };
};

module.exports = ResolveLoader;