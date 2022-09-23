//atribuição por referencia

const a={name: 'teste'}
const b=a;

console.log(a);
console.log(b);


//null é ausencia de valor, quando eu quizer zerar uma variavel eu uso null, 
//undefined quer dizer que a variavel nunca foi inicializada, não é legal atribuir undefined para variaveis, 

let valor= null;
console.log(valor);
//console.log(valor.toString());//erro!

const produto={};
console.log(produto.preco)
console.log(produto)
produto.preco=3.5;
console.log(produto);

//atribuição por valor você faz uma cópia do valor e cada variavel /constante tem seu valor indepedente
//atribuição por referencia copiando  o endereço de memória as duas variaveis ou constantes passam a apontar para o mesmo lugar
//se vc quer que aquela variavel não aponte para aquele endereço de memória você pode atribuir um null, e quando
//você tem uma variavel null você não pode acessar nenhum membro, nenhuma função , nemhum atributo daquela variavel

