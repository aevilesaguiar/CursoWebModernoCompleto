//operadores Lógicos


function compras(trabalho1, trabalho2){

    const comprarSorvete=trabalho1||trabalho2;
    const comprar50= trabalho1&&trabalho2;
    const comprar32= trabalho1!=trabalho2;//trabalho1 for diferente de trabalho 2 simulando o OU exclusivo atravez do diferente
    //const comprar32=!!(trabalho1^trabalho2)//bitwise xor(operador ou exclusivo) - as duas negações lógicas convertem algo para boolean - ^ou exclusivo 
    const manterSaudadavel = !comprarSorvete;//operador unário

    //criar um objeto omitindo a chave, ecma script, ou seja não necessita criar o par chave valor
    return{comprarSorvete,comprar50,comprar32,manterSaudadavel}

}

console.log(compras(true, true));

console.log(compras(true, false));

console.log(compras(false, true));

console.log(compras(false, false));