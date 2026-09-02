#!/usr/bin/env node
/** Собирает npm-пакет classless-njxui в package/:
 *  classless.css (читаемый бандл _base + _native), classless.min.css, LICENSE. */
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const out = path.join(root, 'package');

const base = fs.readFileSync(path.join(root, 'css/_base.css'), 'utf8');
const native = fs.readFileSync(path.join(root, 'css/_native.css'), 'utf8');
const header = `/*! classless-njxui — classless CSS for plain semantic HTML
 *  https://classless.njxui.dev · MIT License */\n`;
fs.writeFileSync(path.join(out, 'classless.css'), header + base + '\n' + native);
fs.copyFileSync(path.join(root, 'public/css/classless.min.css'), path.join(out, 'classless.min.css'));
fs.copyFileSync(path.join(root, 'LICENSE'), path.join(out, 'LICENSE'));
console.log('package built: classless.css, classless.min.css, LICENSE');
