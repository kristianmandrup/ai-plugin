const PluginList = require('./list');

module.exports = function() {
  console.log('list plugins');
  new PluginList().list();
}