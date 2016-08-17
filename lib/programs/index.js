const programs = [
  'create',
  'install',
  'uninstall',
  'list'
];

programs.map(prog => {
  require(`./${prog}`)
});
