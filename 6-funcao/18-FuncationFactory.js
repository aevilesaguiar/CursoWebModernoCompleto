//função Factory(função fabrica): é uma função que retorna um objeto, o objetivo dela é fabricar uma instancia de um objeto

//Factory Simples
function criarPessoa(){

        return {
        nome:'Ana',
        sobrenome:'Silva'
    }
}

console.log(criarPessoa())