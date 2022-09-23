const imprimirResultado= function(notas){

    if(notas>=7){
        console.log('Aprovado');
    }else{
        console.log('Reprovado');
    }
}

imprimirResultado(5)
imprimirResultado(7)
imprimirResultado('Epa')//deveria ser um um erro e isso ocorre devido JS ser fracamente tipado





