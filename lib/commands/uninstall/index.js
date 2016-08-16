const UninstallPlugin = require('./uninstall');

module.exports = function(name) {
  console.log('uninstall plugin', name);
  new UninstallPlugin().uninstall();
}