//) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica O programa recebe
//como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
//numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
//3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

function calculadora( num1, num2,operacao){


    switch (operacao) {
        case '+':
            return `${num1+num2}`
            break;

        case '-':
            return `${num1-num2}`
            break;
        case '/':
            return `${num1/num2}`            
            break;

        case '*':
            return `${num1*num2}`
            break;
            
        default:
            return `Operação Incorreta`
            break;
    }
}
console.log(calculadora(1,2,'+'));
console.log(calculadora(8,2,'-'));
console.log(calculadora(9,2,'/'));
console.log(calculadora(5,2,'*'));

