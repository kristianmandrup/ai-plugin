const PluginCreator = require('./creator');

module.exports = function(name) {
  console.log('create plugin', name);
  new PluginCreator().create(name);
}