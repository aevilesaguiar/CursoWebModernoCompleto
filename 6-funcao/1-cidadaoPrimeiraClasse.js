//função em JS é First-Class Object(Citizens)
//Higher-order function (função de alta ordem)
//significa que função pode ser separado como um dado, função pode ser passada como parametro, pode ter uma função dentro dela...
//programação funcional Higher-order é muito importante

//declarar função de forma literal
//na função o bloco é obrigatório no caso da função tradicional no caso da arrowFunction é permitido
function fun1(){ //senão passarmos nenhum valor na função ela retorna undefined

}

//podemos armazenar uma função numa variável
const fun2= function(){} //eu consigo referenciar uma função anonima a uma constante

//armazenar uma função num array
const array=[function(a,b){ return a+b}, fun1, fun2]

console.log(array[0](2,3))

//armazenar uma função em um atributo de objeto
const obj={};
obj.falar=function(){return 'Opa!'}
console.log(obj.falar())

//passar uma função como parâmetro
function run(fun){
    fun()
}

run(function(){console.log('Executando;')})

//uma função pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c);
    }
}

soma(2,3)(4)