const n = require('nunjucks');
const paths = require('../config/paths');
const env = new n.Environment(new n.FileSystemLoader(`${paths.app}/snippets`));

function parse (Loom, block) {
    const bp = require(`${paths.app}/config/blueprints/${block.type}.js`);
    for(var i in bp) {
        let field = bp[i];
        if (field.entity) {
            const entities = Loom.content.getDir(field.entity)
            .map(en => en.content);
            block[i] = field.filter ? field.filter(entities) : entities;
        }
    }
    return block;
}

function render (Loom, page) {

    const pageTemplate = Loom.templates.get('page');
    const children = page.content && page.content.map((block) => {
        let tmp = Loom.templates.get(block.type);
        block = parse(Loom, block);
        if (tmp) return env.renderString(tmp, block);
    }) || [];

    return env.renderString(pageTemplate, { 
        content : children.join(""),
        meta: page.meta
    });
}

module.exports = render;