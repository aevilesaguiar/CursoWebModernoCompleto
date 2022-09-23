//apenas uma sentença de código está associado a esse bloco, se houver mais de uma sentença usamos chaves

function teste1(num){
    if(num>7)
    console.log(num);

    console.log('final');
    
}

teste1(3)
console.log('-------------------');
teste1(9)
console.log('-------------------');


function teste2(num){

    if(num>7);//cuidado com ; não usar com as estruturas de controle
    
    {
    console.log(num);

    console.log('final');
    }
}

teste2(1)