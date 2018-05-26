#!/usr/bin/env node

const script = process.argv[2];
const path = require('path');

const paths = require('../config/paths');

switch(script) {
    case 'build':
    case 'install':
    case 'dev':
        require('../scripts/' + script);
    break;
}