const plugins = require('../commands');
const program = require('commander');

program
  // `create [app|layout|plugin|manifest] <name>`
  .command('create <name> [layout]')
  .description('Create plugin')
  .action((name, layout) => {
    console.log(`Create plugin ${name} from skeleton/layout`, layout);

    plugins.create(name, layout);
  });
