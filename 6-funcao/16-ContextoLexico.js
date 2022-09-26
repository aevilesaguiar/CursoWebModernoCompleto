//contexto lexico: contexto em que as coisas foram declaradas dentro da linguagem

const valor = 'Global';

function minhaFuncao(){
    console.log(valor);
}
console.log("----------------------")

function exec(){
    const valor='Local';
    minhaFuncao();

}
exec()