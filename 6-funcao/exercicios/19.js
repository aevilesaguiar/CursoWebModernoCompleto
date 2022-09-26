//Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
//a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
//comando switch. Crie um caso default para produto não existente

function cardapio(codigoItem, quantidade){

    switch (codigoItem) {
        case 100:
        return `Cachorro Quente:R$ ${3.00*quantidade} `;
        break;
        case 200:
        return `Hambúrguer Simples :R$ ${4.00*quantidade} `;
        break;
        case 300:
        return `Cheeseburguer:R$ ${5.50*quantidade} `;
        break;
        case 400:
        return `Bauru :R$ ${7.50*quantidade} `;
        break;
        case 500:
        return `Refrigerante :R$ ${3.50*quantidade} `;
        break;
        case 600:
        return `Suco :R$ ${2.80*quantidade} `;
        break;
        default:
            break;
    }
}

console.log(cardapio(500, 1));
console.log(cardapio(100, 2));
console.log(cardapio(200, 3));
console.log(cardapio(300, 4));
console.log(cardapio(400, 5));