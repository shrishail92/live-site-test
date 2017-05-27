#!/usr/bin/env node

var browserSync = require('browser-sync');
var colors = require('colors');
var program = require('commander');

program
    .option('-s, --site <siteurl>', 'The site to test')
    .parse(process.argv);

if (!program.site) {
    console.error("No url supplied!!!".red);
} else {
    browserSync({
        proxy: program.site
    });
}
