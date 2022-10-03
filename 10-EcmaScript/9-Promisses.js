//Promises: nada mais é que uma promessa, você usa promisse quando você quer um processamento assincrono
//a promisse possui dois destinos ser revolvida/atendida  ou promessa rejeitada
//Digamos que você quer acessar um arquivo que está remoto, umas das possibilidades de você ter
//acesso a esse arquivo é a partir de uma callback, você passa uma url, passa uma callback de sucesso
//passa uma callback de erro, caso o arquivo seja obtido de forma bem sucedida a callback de sucesso
//é chamada, caso o arquivo não seja obtido por algum tipo de erro a callback de erro é chamada
//apresentando a mensagem de erro, alguma coisa que descreva exatamente o problema que aconteceu
// Você vendo o cenário de uma callback é o mesmo cenário de uma promise, pode ter o sucesso ou erro
//A promisse tem por objetivo apresentar uma operação assincrona que pode ser atendida ou rejeitada.

const { reject } = require("lodash");

//como funciona uma promise
//operação assincrona simulando com o timeout
function falarDepoisDe(segundos, frase){
    //esse parametro resolve é uma função que será chamada quando a promessa for atendida e reject quando for rejeitada
    //o resolve aceita apenas um parametro, se eu quiser passar varias coisas eu tenho que passar um objeto
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(frase)
            
        },segundos*1000)
    })
}
//a promise tem a função then,e essa função é chamada quando você resolve a promise passando um objeto que vc deseja
falarDepoisDe(3,'legal, foi atendido!')
//através do then eu consigo encadear
.then(frase=>frase.concat('!?!'))
.then(outraFrase=>console.log(outraFrase))
//para tratar o caso de erro em uma promise eu chamo a função .catch
.catch(e=>console.log(e))