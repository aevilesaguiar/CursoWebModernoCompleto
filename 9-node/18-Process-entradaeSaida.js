//Process-entrada e Saida Padrão
//No node nós temos algumas constantes que são disponíveis globalmente
//uma dessas constantes é o __dirname, nós temos o Objeto global
//e temos outro objeto process, e aprtir do objeto process nós podemos
//ler dados do teclado do usuario e consegue imprimir tanto na entrada padrão
//como na saida padrão do computador, entrada padrão seria o teclado,
//saida padrão é a tela

const anonimo = process.argv.indexOf('-a') !== -1;
//console.log(anonimo)

//node 18-Process-entradaeSaida.js  : false
//node 18-Process-entradaeSaida.js -b  : false
//node 18-Process-entradaeSaida.js -a :true

if(anonimo){
    process.stdout.write('Fala Anônimo"\n')
    process.exit()
}else{
    process.stdout.write('Informe o seu nome:');
    process.stdin.on('data',data=>{//stdin 'data'(pega o que o usuario digitou) ocorre quando o usuario aperta enter
        const nome= data.toString().replace('\n','')

        process.stdout.write(`Fala ${nome}!! \n`);//saida padrão standard output que é o console
        process.exit()
    })
}