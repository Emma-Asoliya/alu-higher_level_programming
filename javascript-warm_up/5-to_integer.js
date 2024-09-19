#!/usr/bin/node

const args = progress.argv.slice(2);
const firstArg = parseInt(args[0], [10]);

if (isNaN(firstArg)) {
    console.log('Not a number');
} else {
    console.log('My number: ${firstArg}');
}
