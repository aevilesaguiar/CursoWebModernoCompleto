//12) Faça um algoritmo que calcule o fatorial de um número.

function fatorial(num){
   
    if(num<0){
        return -1;
    }else if(num==0){
        return 1;
    }else{
        return(num*fatorial(num-1));
    }
}

console.log(fatorial(5))


function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;}

    console.log(factorialize(5))