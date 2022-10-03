//tratamento de erro dentro do constexto das promisses
function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject)=>{
        try{
            con.log('temp')
        if(Math.random()<chanceErro){
            //gerar o erro
            reject('Ocorreu um erro')
        }else{
            resolve(valor)
        }
        }catch(e){
            reject(e)
    }
    })
}

funcionarOuNao('Testando',0.5)
.then(v=>`Valor:${v}`)//.then(console.log)
.then(
    v=>console.log(v),
   // err=>console.log(`Erro esp.:${err}`)
   )
   .then(()=>console.log('Quase Fim!'))
   .catch(err=>console.log(`Erro:${err}`))//tratando a exceção
.then(()=>console.log('Fim!'))

