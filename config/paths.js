const fs = require('fs');
const path = require('path');

const appPath = fs.realpathSync(process.cwd())
const coreModule = path.join(appPath, 'node_modules', 'loom')

module.exports = {
    app : appPath,
    module : coreModule,
    template : path.join(coreModule, 'template/')
}