#!/usr/bin/env node

var browserSync = require('browser-sync');
var colors = require('colors');

var url = process.argv[2];

if (!url) {
    console.error("No url supplied!!!".red);
} else {
    browserSync({
        proxy: url
    });
}
