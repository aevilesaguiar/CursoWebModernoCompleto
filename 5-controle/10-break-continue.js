//Break: causa um Desvio de fluxo
//o que é um desvio de fluxo?  é quando ele sai de um ponto , pula algumas linhas e vai para outro ponto
//exemplo quando fazemos um switch utilizamos o break , quando ele executava uma sequencia de código e ele via o break
//automaticamente ele desviava o fluxo pra logo depois do switch.
//o break não influencia num bloco do  tipo if, ele influencia no switch causando a saída quando encontrada o break
//ele influencia dentro de um laço for e de um laço while
// continue: influencia dentro de um laço for e while
//o uso dessas palavras reservadas é desencorajado, pois desviar o fluxo para outros lugares
//devemos usar funções para desviar o fluxo

const nums=[1,2,3,4,5,6,7,8,9,10]

for(x in nums){
    if(x==5){ //se o indice for igual a 5 ele encontra o break, 
        console.log("Parei no 5");
        break
    }
    console.log(`x -${x}=${nums[x]}`)
}

for(y in nums){
    if(y==5){ //se o indice for igual a 5 ele interrompe a execução atual e pulando para a próxima
       console.log("Achei 5");
        continue
    }
    console.log(`y- ${y}=${nums[y]}`)
}

externo:
for(a in nums){
    for(b in nums){
        if(a==2 && b==3)      break externo
       console.log(`Par = ${a}, ${b}`)
    }
}
console.log("Fim!");

//não é para usar esssa estrutura 