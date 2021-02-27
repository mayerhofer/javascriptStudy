// Array initialization, element access and console.log
var a = [];

for (let i=0; i < 100; i++) {
    a.push(2*i);
}

console.log('a = ', a);
console.log('a[0] = ', a[0], ', a[10] = ', a[10], ', a[99] = ', a[99], ', a.length = ', a.length);
console.log('indexOf(4) = ', a.indexOf(4));
console.log('a.pop() = ', a.pop());
console.log('a.length = ', a.length);

// Array transformations
var b = a.map(i => Math.pow(i, 2));
var c = b.slice(0, 8);

console.log('b = a.map(i => Math.pow(i, 2))');
console.log('c = b.slice(0, 8) = ', c);

console.log('****** copyWithin ******')
var d = c.copyWithin(0, 5, 8);
console.log('d = c.copyWithin(0, 5, 8) = ', d);
console.log('c = ', c);
console.log('c === d ? ', c === d);
