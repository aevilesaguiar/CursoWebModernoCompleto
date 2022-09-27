//formas de percorrer o array
//foreach

const aprovados =['Agatha', 'Aldo','Daniel','Raquel']

//você que recebe dois parâmetros se vc não quiser ter acesso ao indice pode simplesmente suprimir esse parametro
//mas se você quiser ter acesso no índice você é obrigado a colocar o primeiro parametro, pois o indice é passado 
//senpre como primeiro parâmetro e nunca como primeiro
aprovados.forEach(function(nome, indice){//função de callback
    console.log(`${indice+1} ${nome}`);
})
console.log("----------------------------");
aprovados.forEach(nome=> console.log(nome));

console.log("----------------------------");

const exibirAprovados = aprovados=> console.log(aprovados);
aprovados.forEach(exibirAprovados);

console.log("----------------------------");
//eu posso incluir o array como terceiro parametro 
//a função callback que você passa para um foreach recebe 3 paramentros se eu adiciona uma quarta, ela será undefined
//podemos suprimir, mas o limite é quatro
aprovados.forEach(function(nome, indice, array){//função de callback
    console.log(`${indice+1} ${nome}`)
    console.log(array);
})
console.log("----------------------------");
