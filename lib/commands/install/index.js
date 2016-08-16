const PluginInstaller = require('./plugin');

module.exports = function install(name) {
  console.log('install plugin', name);
  new PluginInstaller().install(name);
}