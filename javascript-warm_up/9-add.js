#!/usr/bin/node

const args = process.slice(2);

const a = parseInt(args[0]);
const b = parseInt(args[1]);

function add (a, b) {
    const sum = a + b;
    console.log(sum);
}

add(a ,b);
