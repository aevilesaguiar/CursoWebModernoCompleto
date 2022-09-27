//concat : a ieia é que você consiga concatenar vários arrays em um único array, ou vários elementos que você pode passar como parametro
//para um método concat 

const filhas=['Uaslekah','Cibalena'];
const filhos=['Uoxiton', 'Uesclei'];

//usar o concat para jogar os filhos e filhas num único array

const todos= filhas.concat(filhos,'Fulano');//posso incluir um terceiro nome
console.log(todos);

console.log(todos,filhas,filhos);

console.log([].concat([1,2,3],[3,4],5,[[6,7]]));

console.log([].concat('a',[1,2,3],[3,4],5,[[6,7]]));
