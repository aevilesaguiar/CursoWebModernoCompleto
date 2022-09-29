const url='http://files.cod3r.com.br/curso-js/funcionarios.json';

//axios client http , ele faz requisiçoes para obter requisições de algo que está remoto
const axios = require('axios');

//criando as funções antes de obter as listas

const chineses= f=>f.pais==='China';
const mulheres=f=>f.genero==='F';
//essa função recebe dois parametros o primeiro elemento é o 
//acumulador(é o funcionário que no final retorna um funcionario), 
//e o segundo parametro é o elemento atual(funcionario atual)
const menorSalario=(funcionario, funcionarioAtual)=>{
    //sempre vai ser passado para o proximo método reduce o funcionario com o menor salario
    //ele vai sempre comprando esse funcionario que tem o menor salario até agora
    //é maior que o salario do funcionario atual se for ele coloca esse outro
    //e assim por diante
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual;
}

const maiorSalario=(funcionario, funcionarioAtual)=>{
    return funcionario.salario>funcionarioAtual.salario ? funcionario: funcionarioAtual;
}




axios.get(url).then(response=>{
    const funcionarios= response.data; //dentro do atributo data significa que eu tenho um alista de funconários
    //console.log(funcionarios);

    //resolvendo o desafio utilizando as funções descritas acima
//filtrar mulher chinesa com menor salario
const funcFemininoMenorSalario=funcionarios
.filter(chineses)
.filter(mulheres)
.reduce(menorSalario);

console.log(funcFemininoMenorSalario)

console.log("---------------------------------");
const funcFemininoMairSalario  = funcionarios
.filter(chineses)
.filter(mulheres)
.reduce(maiorSalario);

console.log(funcFemininoMairSalario);
});



