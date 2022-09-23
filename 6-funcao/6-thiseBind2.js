//setInterval() dispara uma outra função apartir de um determinado intervalo que você passou
//então você pode passar uma função como parametro para outra função
//nos parametros da função eu posso apssar uma função anônima
//o setInterval() além de receber a função ele recebe  um itervalo que no nosso caso é 1000
//esse 1000 representa que a cada 'x' milisegundos essa função será disparada novamente
//ou seja faz essa execução intervalada , no nosso caso eu passei 1000milisegundos que equivale a um segundo
//a cda 1 segundo essa função anônima que passei no setInterval() será disparada

function Pessoa(){
    this.idade=0



    setInterval(function(){
        this.idade++;
        console.log(this.idade)
    },1000)
}

//new Pessoa
//nesse caso o objeto this.idade não aponta para o objeto pessoa por que quem está disparando a chamada dessa função
//é um temporizador e não o próprio objeto pessoa

function Pessoa1(){
    this.idade=0
    setInterval(function(){
        this.idade++;
        console.log(this.idade)
    }.bind(this),1000)
}

//new Pessoa1
//podemos usar a função bind() para ele amarrar o this desse objeto a chamada dessa função

function Pessoa2(){

    this.idade=0
//self recebe a referencia de this, e ele informa que self esta sendo executado dentro da função Pessoa2(), ou seja nessa linha this é o objeto que eu quero
    const self = this; //armazenei this numa constante sel e essa constante não pode mudar nunca e eu posso substituir o this pelo o self

    setInterval(function(){
        self.idade++;
        console.log(self.idade)//substitui o this pelo o self, ou seja não impora quem chamará a função
    },1000)
}

new Pessoa2
//nesse caso o objeto this.idade não aponta para o objeto pessoa por que quem está disparando a chamada dessa função
//é um temporizador e não o próprio objeto pessoa
