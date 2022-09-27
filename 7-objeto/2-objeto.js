//coleção dinâmica de pares chave/valor

const produto = new Object();

produto.nome='Cadeira';
produto['marca do produto']='Generica';
produto['cor']='amarela';
produto.preco=220;

console.log(produto);

delete produto['marca do produto'];
console.log(produto);



const carro={

    modelo:'A4',
    valor:89000,
    proprietario:{
        nome:'Raul',
        idade:56,
        endereco:{
            logradouro:"Rua abcn",
            numero: 123
        }
    },
    condutores:[{
        nome:'Junior',
        idade:19
    },{

        nome:'Junior',
        idade:19
        
    },{
        nome:'Ana',
        idade:42
    }],
    calcularValorSeguro:function(){
        //..
    }
}
//posso acessar os atributos de duas formas
carro.proprietario.endereco.numero=1000;
//também a partir da notação colchete
carro['proprietario']['endereco']['logradouro']='Av Gigante';

console.log(carro)

//deletando objetos e tudo que estiver em baixo daquele atributo

delete carro.condutores;

console.log(carro)

delete carro.proprietario;

delete carro.calcularValorSeguro;

console.log(carro)