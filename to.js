'use strict';
const fs = require('fs');
const path = require('path');
const filePath = process.argv[2];
const file = fs.readFileSync(filePath);
const fileName = path.basename(filePath);
const dateTime = new Date();
const alphabet = '0123456789ABCDEF';
//const alphabet = `123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghi+%#[(=\/@&:*?kmnopqrstuvwxyz`;
//const alphabet = `123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghi+kmnopqrstuvwxyz`;
const base = require('base-x')(alphabet);

const data = dateTime.toString() + '\n' + fileName + '\n' + alphabet + '\n' + base.encode(file);

fs.writeFileSync('out.txt', data);
