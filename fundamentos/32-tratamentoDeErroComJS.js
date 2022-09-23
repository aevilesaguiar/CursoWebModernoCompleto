//TRATAMENTO DE ERRO (Try/Catch/Throw)

//mecanisco de tratamento de erro
function tratarErroELancas(e){
   // throw new Error(" tratando erro");
   //throw 10;
   //throw true;
   //throw 'mensagem';
   throw {
    nome: e.name,
    msg:e.message,
    date: new Date
   }
}


function imprimirNomeGritando (obj){
    try {
        console.log(obj.name.toUpperCase()+' !!!')
        
    } catch (e) {
        //tratar o erro
        tratarErroELancas(e);
    }finally{
        //será executado mesmo que ocorra erro ou não
        console.log("Acabou O PROBLEMA!")

    }
}


const obj= { name:'Flavio'}

imprimirNomeGritando(obj)

//EVITA MOSTRAR AO USUARIO detalhes de infrestrutura, mensagens em ingles
//p legal é lançar um hash que tenha um log o qual fique fpácil para invvestigar o erro 