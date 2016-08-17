const plugins = require('../commands');
const program = require('commander');
const util = require('./util');

program
  // `install <names>` 
  .command('install <names>')
  .description('Install named plugins')
  .action((names) => {
    names = util.normalize(names.split(','));
    console.log('install plugins', names);

    plugins.install(names);
  })
