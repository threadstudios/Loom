const express = require('express')
const PluginLibrary = require('./PluginLibrary');
const TemplateCache = require('./caches/Template');
const ContentCache = require('./caches/Content');
const middleware = require('./middleware');
const render = require('./render');

class Loom {
    constructor() {
        this.tCache = new TemplateCache();
        this.cCache = new ContentCache();
        this.plugins = new PluginLibrary();
        const app = express();
        return () => {
            const l = this;
            return {
                listen(port) {
                    port = port || 1777;
                    Promise.all([l.tCache, l.cCache])
                    .then((res) => {
                        l.templates = res[0];
                        l.content = res[1];
                        app.use(middleware(l));
                        app.listen(port, () => {
                            console.log(`Listening on port ${port}`)
                        });
                    })
                }
            };
        }
    }
    render(page) {
        return render(this, page);
    }
}

module.exports = Loom;
