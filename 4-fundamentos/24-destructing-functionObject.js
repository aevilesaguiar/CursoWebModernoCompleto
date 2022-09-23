//podemos usar o operador destructing no parametro de uma funçao
 function rand([min=0, max =1000]){
      if(min>max)[min,max] =[max,min]//se o minimo for > que o maximo inverta as variaveis e eu consigo inverter utilizando o operador destructing

    const valor=Math.random()*(max-min)+min;//foi somado com minimo para ele poder deslocar o intervalo e ele dá sempre entre o valor minimo e maximo
    return Math.floor(valor);//floor arredonda para baixo ceil arredonda para cima
 }


 console.log(rand([50,40]));
 console.log(rand([992]));
 console.log(rand([, 10]));
 console.log(rand([]));
 
