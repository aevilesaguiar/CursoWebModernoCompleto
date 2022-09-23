//dentro de cada case podemos ter mais de uma sentença sem ter que colocar chaves de código JS entende

const imprimirResultados= function(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de honra');
            break;
        case 1:
            console.log('Reprovado');
            break;
        default:
            console.log('Nota inválida');

    }
}
imprimirResultados(21)