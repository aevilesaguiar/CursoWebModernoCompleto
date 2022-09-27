//funções importantes de Object

const pessoa={
  nome:'Rebeca',
  idade:2,
  peso:13
}

//pega todas as chaves do objeto
console.log(Object.keys(pessoa));

//pega todos os valores do objeto
console.log(Object.values(pessoa));

//pega lista chave valor, que são os registros os entries(ele nos devolve um array)
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]}:${e[1]}`)
})
console.log("-----------------------")

//tirar   o nome chave e valor- inclui o operador destructing [] e incluir chave e valor[chave, valor]
//destructuring: é uma expressão JavaScript que possibilita descompactar valores de matrizes ou propriedades de objetos em variáveis ​​distintas.
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}:${valor}`)
})


//define uma propriedade de um object
Object.defineProperty(pessoa,'dataNascimento',{
  enumerable:true,//será enumerada, se fosse false ele não enumeraria
  writable:false,//não permite sobrescrita
  value:'01/01/2022'
})
console.log(pessoa.dataNascimento)

//listando
console.log(Object.keys(pessoa))

console.log("-----------------------")
//Object.assign
const dest = {a:1};
const o1={b:2};
const o2={c:3,a:4};
const obj=Object.assign(dest,o1,o2); //objeto resultante que recebe assign, ou seja ela pega o objeto de dest que vai receber os atributos
                                      //todos os objetos que você passar como parametro o1,o2 , ele pega esses objetos e concatena no que você passou no primeiro parametro
//ele concatena todos os objetos
 console.log(obj)

