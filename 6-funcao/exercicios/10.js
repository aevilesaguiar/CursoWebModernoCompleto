//10) Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne true
//ou false.

function verificador(num){
    let resultado=num%3;

    if(resultado==0){
        return true;
    }else{
        return false;
    }

}

console.log(verificador(5))
