const registry = require('../../../registry/plugins');
const proc = require('child_process');
const exec = proc.exec;
const spawn = proc.spawn;
const fs = require('fs-extra');
const path = require('path');

const _ = require('lodash');
const prepend = require('prepend-file');
const {log, utils} = require('ai-core');
const fileAt = utils.io.fileAt;

const customInstallers = require('./plugins');
const UsePlugin = require('./use-plugin');

function shellCmd(command, ...args) {
  let fullCmd = `${command} ${args.join(' ')}`;
  log.info(fullCmd);
}

const Preferences = require('../preferences');

module.exports = class PluginInstaller {
  constructor(name) {
    this.name = name;
    this.preferences = new Preferences();
  }

  get moduleSystem() {
    return this.packageManager === 'npm' ? 'npm' : 'jspm';
  }

  get packageManager() {
    return this.preferences.packageManager;
  }

  get entry() {
    return registry[this.name];
  }

  install() {
    this.resolveEntry();
    // console.log('package manager:', this.packageManager);
    // console.log('module system:', this.moduleSystem);

    this.installJspm();
    this.installNode();

    this.usePlugin();
  }

  usePlugin() {
    const CustomInstaller = customInstallers[this.name];
    if (CustomInstaller) {
      new CustomInstaller(this.fullName).execute();
    } else {
      new UsePlugin(this.fullName).execute();
    }
  }

  installJspm() {
    if (!this.jspm) {
      return;
    }
    // -y say yes to any prompt ??
    shellCmd('jspm', 'install', this.jspm, '-y');
  }

  installNode() {
    if (!this.npm) {
      return;
    }
    shellCmd('npm', 'install', this.npm, '--save');
  }

  resolveEntry() {
    let entry = this.entry;
    if (!entry) {
      console.log('Plugin', this.name, 'has not yet been registered with this installer');
      console.log('Please add the plugin configuration at: https://github.com/kristianmandrup/aurelia-installer');
      process.exit(1);
    }
    if (typeof entry === 'string') {
      this[this.moduleSystem] = entry; // default
      this.fullName = entry;
      return;
    } else {
      if (entry.jspm) {
        this.jspm = entry.jspm;
      }
      if (entry.npm) {
        this.npm = entry.npm;
      }
    }
    this.fullName = this.jspm || this.npm;
  }
}


