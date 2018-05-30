const router = require('express').Router();

router.use('/install', (req, res) => {
    if (req.query.l === process.env.LOOM) { 
        res.render('install.njk');
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;