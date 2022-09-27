// conceito de encapsulamento do JavaScript (níveis de visibilidade das coisas):
//quando trabalhamos no nível do browser nós temos o escopo global que é o window, escopo da função e o escopo de bloco a partir variaveis com const e let
//quando trabalhamos no nível do node nós temos, global, nível do proprio módulo que representa o arquivo, e função

//criação de objetos usando a notação literal

const obj1= {}
console.log(obj1);

//outra forma de criação é através do object em JS
console.log(typeof Object, typeof new Object);
//criou através do operador new
const obj2= new Object();
obj2.nome='Maria';
console.log(obj2);

//criar as próprias funções construtoras
//quando eu uso o this quer dizer que esse atributo é publico, ou seja quem quiser alterar o valor do nome pode alterar
function Produto(nome,preco,desconto){
    //variaveis visiveis para fora do objeto,
    //quando eu crio um atributo dentro da função ele será privado
    this.nome=nome;
    this.getPrecoComDesconto=()=>{
        //preco e desconto não são visiveis pois os dois valores estão apenas dentro da função
        return preco*(1-desconto);
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Televisão', 5817.99, 0.20);

console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())


//criar um objeto através de uma função factory(factory é um padrão de projeto, ou seja é uma função que fabrica alguma coisa)
//função Factory(função fabrica): é uma função que retorna um objeto, o objetivo dela é fabricar uma instancia de um objeto
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30)*(30-faltas)
        }
    }
}
const f1= criarFuncionario('Joao',1800,3);
const f2= criarFuncionario('Maria',8800,1);
console.log(f1.getSalario(),f2.getSalario())

//podemos criar umobjeto através do Object.create
const filha = Object.create(null);
filha.nome='Ana';
console.log(filha);

//CONVERTENDO JSON(DADOS) EM OBJETOS
//função famosa que retorna um objeto
//ele converteu esse texto em objeto e colocou dentro da variável fromJSON
const fromJSON= JSON.parse('{"info":"Sou um JSON"}');
const fromJSON2= JSON.parse('{"dados":"dados informativos"}');

console.log(fromJSON.info+ "\n"+fromJSON2.dados);