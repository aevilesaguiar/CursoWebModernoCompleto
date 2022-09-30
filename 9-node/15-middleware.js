//middleware pattern (chain of responsability/cadeia de responsabilidade)

//contexto é o objeto que vai passando de um contexto para outro, ou seja de middleware para outro
//nesse caso o objeto é importante por que o objeto que carrega os dados de um passo para outro
//exemplo: no primeiro passo eu obtenho a lista de produtos do BD, aí eu incluo a lista no contexto
//o segundo no segundo passo o contexto já estará preenchido com a lista de produtos aí você
//pode filtrar os produtos que estão vencidos, e no próximo passo você pode enviar um relatório
//para alguém para fazer algum tratamento dos produtos vencidos da empresa
//ou seja a partir desse contexto que é passado para cada um dos middlewares dessa cadeia , 
//é a forma como você tem para comunicar os dados de uma função para outra.
//já que não há um acoplamento, uma dependencia de uma função para outra esses dados que são passados
//eles são importantes

//nesse caso o parametro  ctx=contexto é um objeto
//o segundo parametro é o next que quando chamada vai disparar o próximo passo da cadeia
const passo1=(ctx,next)=>{
    ctx.valor1='mid1';// quando eu adiciono um atributo em js ele adiciona ao objeto
    next();//disparo a função e ele chama o próximo passo
}
//outra função middware que recebe contexto e next
const passo2=(ctx,next)=>{
    ctx.valor2='mid2';// quando eu adiciono um atributo em js ele adiciona ao objeto
    next();//disparo a função e ele chama o próximo passo
}
//vou criar o terceiro middleware só que nesse caso não vou querer disparar a função next
//em algumas situações você não quer middleware não chame o próximo passo , então
//você não é obrigado a declarar os dois parametros
const passo3=ctx=> ctx.passo3='mid3';

//nesse caso é só um exemplo,para demonstrar o padrão,no express a função middware tem 3 parametros a requisição, a resposta
//e o next(request, response e next)

//criar a função que vai executar todos osmeus middlewares
//tmos um array chamado middlewares
const exec=(ctx, ...middlewares)=>{
    //eu crio outra função para executar cada um dos passos
    //eu passo o indice que eu quero executar
    //ex: execute o passo de indice 0. ele olha nesse array ...middlewares
    //e vai pegar a função de indice 0 e vai executar ela , ai depois
    //execute o passo de indice 1....
    const execPasso= indice=>{
        //se o indice que eu passei é menor que o tamanho do array
        middlewares && indice < middlewares.length &&
        middlewares[indice](ctx,()=>execPasso(indice+1))

    }
    execPasso(0);
}


const ctx={};
exec(ctx, passo1, passo2,passo3)
console.log(ctx)