// JS é uma linguagem multiparadigma, você pode programar JS proocedural , pode programar JS OO
//pode programar JS funcional 

//json é um formato textual e ele é diferente de objeto em javaScript
//um par de chaves representa um objeto
//assim como um par de colchetes representa um array
// objeto vazio {}
//Um objeto em JS é uma coleção de chave e valor você tem o nome do identificador e você passa valor para ele.Pode ser um texto, boolean, numero, function ...

const prod1={};
prod1.nome='Celular Ultra';
prod1.preco=4998.60;
prod1['Desconto legal']=0.40;//evitar atributos com espaço

console.log(prod1)
console.log(typeof prod1);
console.log(prod1.nome.concat('Maria'));

const prod2={
    nome: 'Camisa Polo',
    preco:79.90,
}

console.log(prod2)