const fs = require('fs');
const glob = require('glob');
const paths = require('../config/paths');

lGlob = (path) => new Promise((resolve, reject) => {
    glob(path, (err, files) => {
        if (err) reject(err);
        resolve(files);
    })
})

async function loadJSON(path) {
    fs.readFile(`${paths.app}/config/${path}.json`, (err, data) => {
        if(err) throw err;
        return data;
    })
}

async function loadDir(path) {
    let files = await lGlob(`${paths.app}/config/${path}/*`);
    files = await Promise.all(files.map(file => loadJSON(file)))
        .then((res) => {
            return res;
        })
    return files;
}

module.exports = {
    loadJSON,
    loadDir
}