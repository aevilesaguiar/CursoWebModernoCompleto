const _= require('lodash')//ele usa o underscor para criar uma referencia para a biblioteca lodash

//setInterval para ficar executando de tempos em tempos
//uma função lodash_.random que vai executar um valor aleatorio entre 1 e 1000
setInterval( () => console.log(_.random(1,1000)),2000);