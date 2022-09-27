//herança
//principio do OO que faz com que você  receba do seu pai atributos e comportamento
//o objetivo da OO é que você reuse código
//escolher entre herança e composição , escolha composição
//JS tem uma herança baseada em protótipos

//toda vez que eu instancio um new Object ele tem uma referencia pra Object.prototype
//o atributo prototype só está disponivel em função

//[[Prototype]]!= prototype; // conceito de prototipo é diferente da propriedade de prototype

//Object é uma função e por ser uma função tem esse atributo prototype


const ferrari={
  modelo:'F40',
  velMax:324
}

const volvo={
  modelo:'V40',
  velMax:200
}

//__proto__ -> esse atributo eu consigo acessar qual o objeto pai, se ele não encontrar na cadeia de prototipo do pai, ele encontra no filho
console.log(ferrari.__proto__);
console.log(ferrari.__proto__===Object.prototype); //um objeto por padrão aponta para o ObjectPrototype
console.log(volvo.__proto__===Object.prototype); //um objeto por padrão aponta para o ObjectPrototype
console.log(Object.prototype.__proto__); 
console.log(Object.prototype.__proto__===null);

function MeuObjeto(){}

console.log(typeof Object, typeof MeuObjeto)

console.log(Object.prototype, MeuObjeto.prototype)




