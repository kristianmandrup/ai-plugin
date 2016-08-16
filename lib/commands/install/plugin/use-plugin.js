module.exports = class UsePlugin {
  constructor(fullName) {
    this.fullName = fullName;
  }

  execute() {
    this.ensurePluginsFile();
    this.addUse((err) => {
      if (err) throw err;
      log.success('Aurelia configured to use plugin:', this.fullName);
    });
  }

  ensurePluginsFile() {
    const jsFile = './src/plugins.js';
    const tsFile = './src/plugins.ts';
    this.pluginsFile = fileAt(jsFile) || fileAt(tsFile);

    if (!this.pluginsFile) {
      log.info(`Creating missing plugins.js file. Use it from main.ts`);
      try {
        let sourceFile = path.join(__dirname, 'templates', 'plugins.js');
        fs.copySync(sourceFile, this.pluginsFile);
      } catch (err) {
        throw `Error creating plugins config file: ${this.pluginsFile}`;
      }
    }
  }

  // override for custom post install
  postInstall() {
  }

  get useLine() {
    return `aurelia.use.plugin('${this.fullName}');\n`
  }

  prependFile(filePath, txt) {
    prepend(filePath, txt, function(err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  }

  addUse(done) {
    if (!fileAt(this.pluginsFile)) {
      throw `Error:', ${this.pluginsFile}`;
    }
    fs.readFile(this.pluginsFile, 'utf8', (err, data) => {
      if (err) {
        throw `Read error: ${this.pluginsFile}`;
      }

      let reg = new RegExp(_.escapeRegExp(this.useLine));
      if (data.match(reg)) {
        throw 'Aborting: plugin is already used';
      }

      let newData = data.replace(/\/\/ more plugins here/, `${this.useLine}\n  // more plugins here`);

      fs.writeFile(this.pluginsFile, newData, 'utf8', (err, data) => {
        if (err) {
          throw `Write error: ${this.pluginsFile}`;
        }
        done();
      })
    })
  }
}