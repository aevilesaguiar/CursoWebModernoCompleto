//herança

function MeuObjeto(){}

console.log(MeuObjeto.prototype)

//instanciando objeto apartir de uma função
const obj1= new MeuObjeto();
const obj2= new MeuObjeto();

//uma vez que eu crio dois objetos diferentes a partir de uma mesma função construtora
//o protótipo desse objeto aponta para o mesmo objeto por padrão? sim
console.log(obj1.__proto__===obj2.__proto__); //obj1===obj2 é estritamente igual
console.log(MeuObjeto.prototype===obj1.__proto__);
console.log(MeuObjeto.prototype===obj2.__proto__);

//quando você cria um objeto apartir de uma função construtora usando new, o protótipo desse objeto automaticamente 
//aponta para a função que você criou .prototype

MeuObjeto.prototype.nome='Anonimo';
MeuObjeto.prototype.falar=function(){
  console.log(`Bom dia! Meu nome é ${this.nome}!`)
};

obj1.falar();

obj2.nome='Rafael';

obj2.falar();

//o conceito de protótipo que é você ter um link para outros objetos e você pesquisar na cadeia de protótipo procurando funções ou atributos a partir da cadeia de protótipos
//o atributo prototype da função, toda função tem esse atributo
//e o atributo __proto__ que é como um objeto referencia o seu protótipo


const obj3={}
obj3.__proto__=MeuObjeto.prototype; //obj3 recebe objeto prototype, ou seja estou mudando a referencia do protótipo do obj3 para sair de object.prototype para MeuObjeto.prototype
//dá mesma forma eu vou ter acesso ao nome e também ao método falar();
obj3.nome='Obj3';
obj3.falar();

//Resumindo
console.log((new MeuObjeto).__proto__===MeuObjeto.prototype);//quando um objeto é instanciado a partir da função eles são iguais
console.log(MeuObjeto.__proto__===Function.prototype);//A função também tem um atributo __proto__ e a função dentro dela tem uma referencia para __proto__  e isso aponta para Function.prototype
//console.log((Function.prototype.__proto__ === Object.prototype) //o prototipo de uma function aponta para um Object prototype
console.log(Object.prototype.__proto__);//chegou no prptotype não tem um objeto apos o prototype