# Ai-plugin [![Build Status](https://secure.travis-ci.org/kristianmandrup/ai-plugin.png?branch=master)](http://travis-ci.org/kristianmandrup/ai-plugin) [![NPM version](https://badge-me.herokuapp.com/api/npm/ai-plugin.png)](http://badges.enytc.com/for/npm/ai-plugin)

> Plugin manager for Aurelia

Will likely be integrated with [monterey](https://github.com/monterey-framework/monterey) at some point in the future.
For our vision, please see the [moneterey book](https://aurelia-ui-toolkits.gitbooks.io/monterey-overview/content/)

## Getting Started
Install the module with: `npm install ai-plugin`

```javascript
const plugin = require('ai-plugin');
```

## Documentation

Plugins are installed from `registry/plugins.json`:

```json
{
  "animator-velocity": "aurelia-animator-velocity",
  "fetch": "aurelia-fetch-client",
  "dialog": "aurelia-dialog",
  "i18n": "aurelia-i18n",
  // ...
 }
```

You are encouraged to register your own favorite aurelia plugins in this registry. The key is the alias (short name).

Depending on your (registered) preference, the plugin will be installed via `npm` or `jspm` package manager. The plugin will also be configured.
Each plugin can (optionally) include a custom `post-install` configuration step which will be run after basic installation. Same goes for `uninstall` with a custom `post-uninstall` config step.

## Structure

- `programs` - CLI commands
- `commands` - commands

## CLI

- `create <name> [mountPath]` - create named plugin (via skeleton plugin or generator?)
- `install <name>` - install named plugin
- `uninstall <name>` - uninstall named plugin
- `list` - list registered plugins

## Contributing

Please submit all issues and pull requests to the [kristianmandrup/ai-plugin](https://github.com/kristianmandrup/ai-plugin) repository!

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/kristianmandrup/ai-plugin/issues).

## License 

The MIT License

Copyright (c) 2016, Kristian Mandrup

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

