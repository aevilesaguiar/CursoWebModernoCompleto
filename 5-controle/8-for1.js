// Estruturas de controle : São comandos da linguagem que permitem desviar o fluxo do programa, dependendo de um teste.

//for é usada quando sabemos a quantidade de repetições determinadas

let contador = 1;

while(contador<=10){
    console.log(`contador = ${contador}`)
    contador++;
}

for(let i=1; i<=10;i++){
    console.log(`i = ${i}`);
}

const notas=[10.00,9.5,2.9,6.9,4];
let soma=0;

for(let i=0; i<notas.length;i++){

    console.log(`notas = ${notas[i]}`)
    soma+=notas[i];

}
console.log("media: "+soma/notas.length)
