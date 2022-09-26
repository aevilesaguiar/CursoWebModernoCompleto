//callback quer dizer chamar de volta
//o ganho que tras usar callback

const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0]

//o bjetivo é pegar todas as notas e gerar um novo array. queremos mostrara as notas maiores que 7

//primeira abordagem usar sem callback

const notasBaixas1 = []
const notasAltas1=[]

for(let i in notas){
    if(notas[i]<7){
        notasBaixas1.push(notas[i]);
    }else{
        notasAltas1.push(notas[i])
    }
}

console.log("NOTAS BAIXAS: "+notasBaixas1)


console.log("NOTAS ALTAS: "+notasAltas1)

//Com callBack (o mesmo tem uma abordagem mais funcional)
//filter é uma função que vai filtrar os elementos de um array em cima de um determinado critério, que vai ser uma 
//função callback que vai retornar  true ou false. Essa função quando eu passar para cada elemnto ele vai chamar essa função
//se a função retornar true significa que aquele elemento deve ser adicionado no array que está sendo gerado
//se a função retornar false quer dizer que aquele elemento não será adicionado no array que é a resposta dessa função notas.filter()
//a função filter() não altera o array notas original, só o array resultante
const notasBaixas2=notas.filter(function(nota){
    return nota<7 //isso retorna true ou false e o elemento vai constar no array final se a nota for maior significa que não vai constar no array resultante
});

console.log(notasBaixas2);


const notasAltas3 = notas.filter(nota=>nota>7);//registrando a função quando eu passo para o foreach
console.log(notasAltas3);


const notasBaixas3 = notas.filter(nota=>nota<7);//registrando a função quando eu passo para o foreach eu estou dizendo chame essa função, armazene essa função e quando acontecer o evento de percorrer os itens chame essa função 
console.log(notasBaixas3);

