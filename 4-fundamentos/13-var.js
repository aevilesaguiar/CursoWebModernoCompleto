{
    {
        {
            {
                var sera = 'Será';
            }
        }
    }
}

console.log(sera);

//escopo: local onde a variavel é visivel, ou seja acessivel
//quando vc define uma variavel dentro de uma função o escopo da variavel é apenas dentro da função
// ou seja ela não é acessivel fora dela
//quando eu crio uma variavel que não está dentro de uma função ela é global, ou seja ela está dentro do objeto window
//variaveis definidas com a palavra reservada var tem escopo  global ou de função; 


function teste(){
    var local=123;
    console.log(local)
}



teste();
console.log('------')
console.log(local)