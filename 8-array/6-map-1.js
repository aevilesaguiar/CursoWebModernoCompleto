//implementação da função map por debaixo dos panos

const carrinho=[
    '{"nome":"Borracha", "preco":3.45}',
    '{"nome":"Caderno", "preco":15.45}',
    '{"nome":"kit de lápis", "preco":23.45}',
    '{"nome":"Caneta", "preco":7.45}'
]

//retorna um array apenas com preços

//1° chamar JSON.parse para transformar as strings em objetos
//converer um texto para objeto
const stringParaobjeto=json=> JSON.parse(json);
console.log(carrinho)

const apenasPreco = produto=>produto.preco;


const resultado=carrinho.map(stringParaobjeto).map(apenasPreco);
console.log(resultado)


