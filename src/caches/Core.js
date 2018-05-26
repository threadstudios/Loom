const c = require('chokidar');

class CoreCache {
    constructor(path) {
        this.watcher = c.watch(path)
        this.watcher.on('add', (file) => this.add(file));
        this.watcher.on('change', (file) => this.add(file));
    }
}

module.exports = CoreCache;