const pilotos=['Vettel','Alonso','Verstappen','Leclerque'];
//remove o ultimo elemento do array
pilotos.pop();
console.log(pilotos);
//adiciona um elemento na ultima posição
pilotos.push("Massa");
console.log(pilotos);

//remove o primeiro elemento da lista
pilotos.shift();
console.log(pilotos);

//adiciona o elemento no primeiro elemento
pilotos.unshift('Hamilton');
console.log(pilotos);


//splice adiciona e remove elementos no array
// adicionar
pilotos.splice(2,0,'Botas','Senna');
console.log(pilotos);

//remover
pilotos.splice(3,1);
console.log(pilotos);

//retorna um novo array - slice é pegar um pedaço do array - slice=pedaço
const algunsPilotos1=pilotos.slice(2);
console.log(algunsPilotos1);//novo array gerado a partir do índice dois

const frutas =['pera','uva','maçã','mamão','laranja','manga']
console.log(frutas);
const algumasFrutas=frutas.slice(1,4);//o índice 4 não entra
console.log(algumasFrutas);