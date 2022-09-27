//Notação Literal EM OBJETOS

const a=1;
const b=12;
const c=13;

//antes da versão ES2015 objeto era criado
const obj1={a:a,b:b, c:c }
//após ES2015
const obj2={a,b, c } //ELE ASSUME O NOME DO ATRIBUTO
console.log(obj1);
console.log(obj2);

//criar dinamicamente uma string

const nomeAttr='nota';
const valorAttr=7.87;

const obj3={ }
obj3[nomeAttr]=valorAttr;
console.log(obj3);

const obj4={[nomeAttr]:valorAttr }
console.log(obj4);

//CRIANDO OUTRO OBJETO -definindo funções dentro de um objeto literal

const obj5={
    funcao1:function(){ //forma antiga vinha a palavinha reservada function
        //..
    },
    funcao2(){
        //... forma nova sem a function
    }
    
 }

 console.log(obj5)

