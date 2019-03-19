console.log('hello world')

var log = console.log.bind(console)
// 插入变量
var name = "Bob", time = "today";
log(`Hello ${name}, how are you ${time}?`)


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
