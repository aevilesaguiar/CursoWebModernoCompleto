function soBoaNoticia(nota){
    if(nota>=7){
        console.log("Só boa notícia: "+nota)
    }else{
        console.log("Reprovado: "+nota)
    }
}

soBoaNoticia(6)
soBoaNoticia(7)

function seForVerdadeEuFalo(valor){

    if(valor){
        console.log('É verdade: '+valor)
    }else{
        console.log(false)
    }
}

seForVerdadeEuFalo()

seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2,3])
seForVerdadeEuFalo({})





