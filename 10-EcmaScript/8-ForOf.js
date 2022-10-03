//Laço For of: o indice for Of opera em cima de valores ele é mais interessante
//índice for opera em cima de índice
//e eu posso utilizar for of para operar em cima de map, set, array , objeto

for (let letra of 'Cod3er') {
    console.log(letra)
}

const assuntosECMA=['Map','Set','Promise'];
for (const i of assuntosECMA) {
    console.log(i)
}


const assuntosMap = new Map([
    ['Map',{abordado:true}],
    ['Set',{abordado:true}],
    ['Promisse',{abordado:false}]
])
console.log('------chave e valor--------')
//essa forma vc recebe tanto a chave quanto o valor
for(let assunto of assuntosMap){
    console.log(assunto);
}
console.log('------chave e valor--------')
//desestruturar
for (let [c,v] of assuntosMap){
    console.log(c,v)
}
console.log('------apenas chave--------')
for(let chave of assuntosMap.keys()){
    console.log(chave);
}

console.log('------apenas valor--------')
for(let chave of assuntosMap.values()){
    console.log(chave);
}
console.log('------percorrer as entries--------')
//percorrer as entradas, atraves de um sestructuring
for(let [ch,vl] of assuntosMap.entries()){
    console.log(ch,vl);   
}

console.log('------percorrer em cima de set--------');
const s=new Set(['a','b','c','c']);
for (let letra of s){
    console.log(letra);
}

