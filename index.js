const isNumber = require('is-number');
const tar = require('tar');
const shell = require('shelljs');
const pathParse = require('path-parse');
const globParent = require('glob-parent');
const trimNewlines = require('trim-newlines');

const parsed = pathParse('/home/user/file.txt');
const parent = globParent('foo/bar/*.js');
const trimmed = trimNewlines('\nhello\n');

console.log('Is 42 a number?', isNumber(42));
console.log('Path parsed:', parsed);
console.log('Glob parent:', parent);
console.log('Trimmed:', trimmed);
