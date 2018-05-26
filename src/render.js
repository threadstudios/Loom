const n = require('nunjucks');
const paths = require('../config/paths');
const env = new n.Environment(new n.FileSystemLoader(`${paths.app}/snippets`));

function render (Loom, page) {

    const pageTemplate = Loom.templates.get('page');

    const children = page.content && page.content.map((block) => {
        let tmp = Loom.templates.get(block.type);
        if (tmp) return env.renderString(tmp, block);
    }) || [];

    return env.renderString(pageTemplate, { content : children.join("")});
}

module.exports = render;