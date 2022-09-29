const moduloA= require('../../2-moduloA');
const moduloB= require('../../2-moduloB');
const saudacao=require('saudacao');

console.log(moduloA.ateLogo)

console.log('----------------')

console.log(moduloB.bomDia)


console.log('----------------')

console.log(saudacao.ola)

console.log('----------------');

const c=require('./pastaC/index');
console.log(c.ola2);


console.log('----------------');

//modulo http, interno do node
/*const http = require('http');
http.createServer((req, res)=>{
    res.write('Bom dia!');
    res.end()
}).listen(8080);*/