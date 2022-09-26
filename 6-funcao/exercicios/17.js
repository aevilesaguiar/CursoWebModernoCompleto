//17) Um funcionário irá receber um aumento de acordo com o seu plano de

//plano a- 10%
//plano b-15%
//plano c-20%
//Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
//novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido

function aumentoSalarial(plano, salario){

    switch (plano) {
        case 'a':
            return console.log(`${salario*1.1}`);
            break;
        case 'b':
            return console.log(`${salario*1.15}`);
            break;    
        case 'c':
            return console.log(`${salario*1.20}`);
            break;            
        default:
            return console.log(`Grid salarial inválido`);
            break;
    }
}

aumentoSalarial('a',3200);
aumentoSalarial('b',3200);
aumentoSalarial('c',3200);