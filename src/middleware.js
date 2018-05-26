const express = require('express');
const router = express.Router();
const render = require('./render');

module.exports = (Loom) => {

    router.use(express.static('/assets'));

    router.get('/*', (req, res) => {
        const page = Loom.content.get(req.originalUrl);
        const html = Loom.render(page);
        res.send(html);
    });

    return router;

}