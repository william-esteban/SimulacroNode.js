// los buffer son para manejar datos binarios de forma eficiente en node.js.

const buf1 = Buffer.alloc(10);
console.log(buf1);

const buf2 = Buffer.allocUnsafe(5, 15);
console.log(buf2);

const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);

buf3.fill(1);
console.log(buf3);

buf2.write('abcdef');
console.log(buf2);

