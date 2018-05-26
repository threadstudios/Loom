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
        const filename = getFilename(file);
        this.pages[filename === 'home' ? '/' : filename] = require(file);
    }
    get(url) {
        return this.pages[url] ? this.pages[url] : false
    }
}

module.exports = ContentCache;