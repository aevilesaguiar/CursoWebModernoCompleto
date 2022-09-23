//callback quer dizer chamar de volta

const fabricantes=["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice){

    console.log(`${indice +1}. ${nome}`)
}
console.log("*****************************************")
fabricantes.forEach(imprimir)
console.log("*****************************************")
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})

console.log("*****************************************")
fabricantes.forEach(fabricante=>console.log(fabricante))

//callback nada mais é do que você passar uma função e essa função será chamada quando um evento acontecer
//no caso acima o evento é o loop então quando ele encontra um novo elemento ele dispara um evento que é a função que você chamou no caso imprimir
//ou seja o evento é cada um dos elemento percorridos no array, ou seja para cada elemento ele chama um callback passando o 
//próprio elemento e o índice, encontrou um outro elemento ele passa o proprio elemento e o índice aí chama a função callback depois
//chama o elemento indice  e chama o callback

//outro exemplo é quando fazemos uma chamada ajax (quando fazemos uma chamada para o servidor) teremos uma uma url e uma  função de erro ou sucesso
