#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const paths = require('../config/paths');
const chalk = require('chalk');

console.log(chalk.green('=> Moving template into root directory'));
fs.copySync(paths.template, paths.app);

console.log(chalk.green('=> Copying core scripts into package.json'));
const currentPkg = JSON.parse(fs.readFileSync(path.join(paths.app, 'package.json'), 'utf-8'));
const scripts = {
    dev : "yarn loom dev",
    build : "yarn loom build"
}
currentPkg.scripts = Object.assign({}, currentPkg.scripts, scripts);
console.log(chalk.green('=> Saving package.json'));
fs.writeFileSync(path.join(paths.app, 'package.json'), JSON.stringify(currentPkg, null, 2));

console.log(chalk.green('=> S\'all gravy baby!'));
console.log(chalk.bold('=> Everything is now setup and ready to go!'));
console.log(chalk.bold('=> Run yarn dev to start work on your dev environment'))



