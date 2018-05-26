const path = require('path');

const getFilename = (filePath) => {
    return path.basename(filePath, path.extname(filePath));
}

module.exports = {
    getFilename
}