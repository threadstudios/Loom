const CoreCache = require('./Core');
const paths = require('../../config/paths');
const fs = require('fs');
const { getFilename } = require('../files');

class TemplateCache extends CoreCache
{
    constructor() {
        super(`${paths.app}/config/templates`);
        this.items = {};
        return new Promise((resolve, reject) => {
            this.watcher.on('ready', () => {
                resolve(this);
            })
        });
    }
    ready() {
        
    }
    add(file) {
        fs.readFile(file, 'utf-8', (err, template) => {
            this.items[getFilename(file)] = template;
        });
    }
    get(template) {
        return this.items[template] ? this.items[template] : false;
    }
    all() {

    }
}

module.exports = TemplateCache;