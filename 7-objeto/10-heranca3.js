//herança

const pai={
  nome:'Pedro', corCabelo:'Preto'
}

const filha1=Object.create(pai);//esse método Object.create() define que o protótipo é o objeto que você passou como parâmetro
filha1.nome='Ana';

console.log(filha1);
console.log(filha1.corCabelo)

const filha2=Object.create(pai, {
  nome:{value:'bia',writable:false, enumerable:true
}
});

console.log('-----------------------')

filha2.nome='Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2))

//essa é a forma de saber se o atributo é do próprio objeto ou se veio por herança
for(let key in filha2){
  filha2.hasOwnProperty(key)?
  console.log(key):console.log(`Por herança : ${key}`)
}