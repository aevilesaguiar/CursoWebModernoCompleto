//operador unario
//incremento ++
//decremento --

let num1 = 1;
let num2 = 2;

//incrementa
num1++; //pre fixada
console.log(num1);
//decremento
--num1;//pos fixada - ela tem uma precedencia maior do que a pre fixada
console.log(num1);

console.log(++num1===num2--)//deu true porque o ++ foi executado antes e o -- só depois de comparar ou seja 2==2
console.log(num2)//leio novamente e dá 1