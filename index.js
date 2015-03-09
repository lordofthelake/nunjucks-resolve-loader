var fs = require('fs');
var resolve = require('resolve');

var ResolveLoader = function (options) {
  this.options = options;
};

ResolveLoader.prototype.getSource = function (name) {
  var path = resolve.sync(name, this.options);
  return {
    src: fs.readFileSync(path),
    path: path
  };
};