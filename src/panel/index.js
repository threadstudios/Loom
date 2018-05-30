const nunjucks = require('nunjucks');
const core = require('../core');
const install = require('./routes/install');
const static = require('express').static;

async function panel (Loom, app) {
    const users = await core.loadDir('users');
    var env = new nunjucks.Environment(new nunjucks.FileSystemLoader(`${__dirname}/templates`));
    env.express(app);
    app.use('/panel', static(`${__dirname}/assets`));
    app.use('/panel', install);
}

module.exports = panel;