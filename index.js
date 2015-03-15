var fs = require('fs');

var ResolveLoader = function (targetRequire, options) {
  this.require = targetRequire;
  this.options = options;
};

ResolveLoader.prototype.getSource = function (name) {
  var path = this.require.resolve(name);
  return {
    src: fs.readFileSync(path),
    path: path
  };
};

module.exports = ResolveLoader;