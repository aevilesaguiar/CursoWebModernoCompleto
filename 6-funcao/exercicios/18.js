//18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
//switch. Crie um case default que escreva ‘Número fora do intervalo.’

function lerNumero(numero){
    switch (numero) {
        case 1:
            return console.log('um');
        break; 
        case 2:
            return console.log('dois');            
        break;
        case 3:
            return console.log('tres');            
        break;
        case 4:
            return console.log('quatro');            
        break;
        case 5:
            return console.log('cinco');            
        break;
        case 6:
            return console.log('seis');            
        break;
        case 7:
            return console.log('sete');            
        break;
        case 8:
            return console.log('oito');            
        break;
        case 9:
            return console.log('nove');            
        break;
        case 10:
            return console.log('dez');            
        break;
        default:
            return console.log('numero inválido');
            break;
    }
}

lerNumero(3)