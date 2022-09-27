//herança

function Aula( nome, videoID){

  this.nome= nome;
  this.videoID= videoID;
}

const aula1 = new Aula( 'Bem vindo', 123);
const aula2 = new Aula( 'Até breve', 456);

console.log(aula1,aula2);

//quando você tem uma função construtora e você usa o operador new não só o fato de criar um novo objeto é feito
//mas também o fato que o protótipo desse aobjeto aponta para a função nesse caso Aula.prototype


