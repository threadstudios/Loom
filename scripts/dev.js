const webpack = require("webpack");
const chalk = require("chalk");
const emojic = require("emojic");

const compiler = webpack(require('../webpack.dev.config.js'));

compiler.watch({}, (err, stats) => {
    if (err) {
        console.log(chalk.red("Something broke..."));
    }
    const cleanStats = stats.toJson();
    if (cleanStats.warnings.length) {
        cleanStats.warnings.forEach((warn) => {
            console.log(chalk.yellow.bold(warn));
        })
    }
    if (cleanStats.errors.length) {
        cleanStats.errors.forEach((err) => {
            console.log(chalk.red.bold(err));
        })
    }
    console.log(chalk.blue.bold(`${emojic.tada}  [CLIENT] Package updated`));
    console.log(`${emojic.alarmClock}  Time: ${cleanStats.time}ms`);
    cleanStats.assets.forEach((asset) => {
        console.log(`${emojic.package}  ${asset.name}: ${Number(asset.size / 1024).toFixed(1)}kb`)
    })
});