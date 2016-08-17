const plugins = require('../commands');
const program = require('commander');
const util = require('./util');

program
  // `uninstall <names>` 
  .command('uninstall <names>')
  .description('Uninstall named plugins')
  .action((names) => {
    names = util.normalize(names.split(','));
    console.log('uninstall plugins', names);

    plugins.uninstall(names);
  })
