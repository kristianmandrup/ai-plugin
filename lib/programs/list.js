const plugins = require('../commands');
const program = require('commander');
const util = require('./util');

// How can we generate an index of keywords or categories/description for the plugins!?
// Perhaps use the npm search functionality to build up an index?
program
  // `list <names>`
  .command('list <names>')
  .description('List plugin info')
  .action((names) => {
    names = util.normalize(names.split(','));
    console.log('list plugins', names);

    plugins.list(names);
  });
