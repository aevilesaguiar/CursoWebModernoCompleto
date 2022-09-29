//FORMA MAIS UTILIZADA DE EXPORTAR 


//aquilo que você exporta para fora de um modulo é apenas  o que estará visivel para fora
module.exports={
    bomDia:'Bom dia',
    boaNoite(){
        return 'Boa noite!';
    }
}

//se eu criar algo assim , só ficará disposnível dentro do modulo
let a=2;