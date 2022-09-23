//comportamento de this dentro de uma arrow Function

let compararConThis= function (param){
    console.log(this===param)
}

compararConThis(global)


const obj = {}

compararConThis=compararConThis.bind(obj)
compararConThis(global)
compararConThis(obj)


let comparaComThisArrow= param=> console.log(this===param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)



//tentar mundar o this através do bind

compraraComThisArrow= comparaComThisArrow.bind(obj);
compararConThis(obj)

//a arow function é mais forte que o bind, mesmo ele pedindo para alterar a arrow se mantém firme



