#!/usr/bin/node

const args = process.slice(2);

if (args[0] === undefined) {
    console.log('Missing number of occurences');
} else {
    for (let i = 0; i < parseInt(args[0]); i++) {
        console.log('C is fun');
    }
}
