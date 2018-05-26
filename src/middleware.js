const router = require('express').Router();
const render = require('./render');

module.exports = (Loom) => {

    router.get('/*', (req, res) => {
        const page = Loom.content.get(req.originalUrl);
        const html = Loom.render(page);
        res.send(html);
        
    });

    return router;

}