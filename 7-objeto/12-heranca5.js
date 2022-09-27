//herança
console.log( typeof String);
console.log(typeof Array);
console.log(typeof Object)
//String, Array e Object são funções e possuem o atributo .prototype, por que toda função tem um atributo chamado .prototype
//você acessa um array ou string dentro do método prototype a partir do 'this'

//não existe esse método reverse, ele foi criado
String.prototype.reverse=function(){
  return this.split('').reverse().join('');

}

console.log('Escola Cod3r'.reverse());


//retorna o primeiro elemento do array
Array.prototype.first= function(){
  return this[0];
}


console.log([1,2,3,4,5,6,7].first());
console.log(['a','b','c','d','e'].first());

