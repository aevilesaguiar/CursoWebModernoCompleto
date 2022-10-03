//Tagged Templates: processa o template string dentro de uma função

//A intenção é controlar o parse de uma template String a aprtir de uma função
//Você rece os valores da template String todos fatiados e recebe também um array
//com tudo aquilo que foi interpolado em cima desses dois arrays você consegue fazer 
//uma mescla desses valores

//construir uma função que vai fazer um parse em todas as variaveis interpoladas e vai aplicar
//uma mascarade dinheiro em cada uma delas


function real(partes, ...valores){
    //eu coloco os elementos dentro de um array e depois eu faço um join para gerar/reconstruir a frase
    const resultado = [];
    valores.forEach((valor, indice)=>{
        //senão for um valor numerico eu não retorno nada
        //se for um valor numerico eu chamo a template e ele aplica uma mascara 
        valor=isNaN(valor)? valor:`R$ ${valor.toFixed(2)}`
        resultado.push(partes[indice],valor)
    })

    return resultado.join('');
}

const preco= 29.99;
const precoParcela= 11;

console.log( real `1x de ${preco} ou 3x de ${precoParcela}`)