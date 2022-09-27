//Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. 

function compararNumero(num1,num2){
    if(num1==num2){
        return `${num1} == ${num2}`;
    }else if(num1>num2){
        return `${num1} > ${num2}`;
    }else{
        return `${num1} < ${num2}`;
    }
}

console.log(compararNumero(10,2))

//Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
//números de strings.


function maiorOuIgual(primeiro, segundo) {
    if(typeof primeiro != typeof segundo) return false
    return primeiro >= segundo
    }
    

    console.log( maiorOuIgual(0,1))