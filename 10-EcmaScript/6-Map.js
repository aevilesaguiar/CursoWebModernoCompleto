//Nós já temos dentro do js uma estrutura dinamica chave e valor que é o objeto
//mais foi adicionado uma nova estrutura chamada map
//a grande diferença do map é que no caso do objeto a chave é apenas um literal
//uma string por exemplo, no caso de um map você pode ter a chave como sendo uma
//função , a chave como sendo um numero, a chave como sendo um objeto
//Você tem uma maior flexibilidade do ponto de vista como você pode colocar a chave
//o map não veio para substituir o objeto


const tecnologias = new Map();
tecnologias.set('react',{framework: false})
tecnologias.set('angular',{framework: true})

//retornando o objeto atrvés do map
console.log(tecnologias.get('react'));//a forma de acessar é usando o get e inclui o nome da chave
console.log(tecnologias.get('react').framework);
console.log(tecnologias.get('angular'));
console.log(tecnologias.get('angular').framework);

//outra forma de criar um Map()e já atribuir os elementos
//temos 3 chaves com valores variados
const chavesVariadas = new Map([
    [function(){}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
]);

//imprimindo
console.log("imprimindo")
chavesVariadas.forEach((vl,ch)=>{
    console.log(ch,vl)
})
console.log("-----------")
console.log(chavesVariadas.has(123))//has é a função que diz se um elemento está ou não contido dentro desse Map()

//eu posso excluir elementos de dentro de um Map apartir da função delete
chavesVariadas.delete(123);//a função delete também retorna true ou false
console.log(chavesVariadas.has(123))//verificando se o resultado está presente

console.log("Contem o elemento?")
//temos também o atributo .size para saber quantos elementos estão presentes dentro do Map
console.log(chavesVariadas.size);


//é uma estrutura chave valor que não aceita elementos repetidos
//No lado da chave você tem uma estrutura que não aceita repetição
//no lador do valor pode repetir. 
chavesVariadas.set(123,'a');
chavesVariadas.set(123,'b');

console.log(chavesVariadas.size);//no final teremos o valor b , por que ele foi substituido, por que 
                                //não posso ter chaves duplicadas
                                
