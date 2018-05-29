const CoreCache = require('./Core');
const paths = require('../../config/paths');
const { getFilename } = require('../files');

class ContentCache extends CoreCache
{
    constructor() {
        super(`${paths.app}/content`);
        this.pages = {};
        return new Promise((resolve, reject) => {
            this.watcher.on('ready', () => {
                resolve(this);
            })
        });
    }
    add(file) {
        if (require.cache[file]) delete require.cache[file];
        const filename = file.replace(`${paths.app}/content/`, "").split('.')[0];
        this.pages[filename === 'home' ? '/' : filename] = require(file);
    }
    getDir(dir) {
        return Object.keys(this.pages)
        .filter(key => key.indexOf(dir) !== -1)
        .map(key => this.pages[key]); 
    }
    get(url) {
        return this.pages[url] ? this.pages[url] : false
    }
}

module.exports = ContentCache;