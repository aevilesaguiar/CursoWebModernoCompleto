//Passando Parametros entre modules
//como passar parametros entre modules?
//se um module retorna uma função , voc~e pode invocar essa função passando
//os parametros, e o que tiver dentro será executado
//é assim que se passa parametro de um modulo para outro

//...nomes: argumento variável, ou seja eu posso passar quantos nomes eu quiser
//esse método vai tranaformar uma lista de nomes em uma lista de saudações do tipo Boa semana e nome
module.exports= function(...nomes){
    return nomes.map(nome=>`Boa semana ${nome}!`)
}
