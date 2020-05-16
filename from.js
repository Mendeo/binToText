'use strict';
const fs = require('fs');
const filePath = process.argv[2];
const file = fs.readFileSync(filePath).toString().split('\n');
console.log(file[0], file[1], file[2]);
const alphabet = file[2];
const base = require('base-x')(alphabet);
const data = base.decode(file[3]);
fs.writeFileSync(file[1], data);
