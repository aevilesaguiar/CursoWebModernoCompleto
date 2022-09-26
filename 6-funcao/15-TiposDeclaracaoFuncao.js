//formas de declarar funções

console.log("Function declaration: "+soma(1,3));

//forma tradicional: function declaration
//no caso da function Expression se eu chamar a função antes de declará-la mesmo assim ela será chamada
//por que no JS o interpretador primeiro carrega as funções, deixa ela preparadas e depois executa o código
function soma(x,y){
    return x+y;
}


//function expression: construir uma função anonima e declarar essa função a uma variavel ou constante
//se eu chamar a função sub antes da declração da função ele irá reponder que a função não foi definida
//ou seja tenho que chamar a função apenas depois que ela foi declarada
const sub= function (x,y){
    return x-y;
}

console.log("Function Expression: "+sub(6,3));

//named function Expression: é quando temos um misto da function declaration e da function expression
//nesse caso eu só posso chmar a função depois que ela foi declarada
const mult = function mult(x,y){
    return x*y;
}

console.log("Function Expression: "+mult(6,3));