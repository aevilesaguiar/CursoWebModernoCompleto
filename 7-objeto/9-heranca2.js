//obj.__proto__  -> Se usado como um getter, retorna o [[Prototype]]. Se usado como um setter, retorna undefined.

//cadeia de protótipos (prototype chain)

const avo={
  attr1:'A'
}

const pai={
 __proto__: avo, attr2:'B'
}

const filho ={
  __proto__: pai, attr3:'C'
 }

//ele busca se filho tem atributo1, senão tem ele busca no prototipo, pai tem atributo 1? senão ele busca no prototype avo...

 console.log("FILHO: "+filho.attr1, filho.attr2, filho.attr3);
 console.log("PAI: "+pai.attr2, pai.attr1)
 console.log("AVO: "+avo.attr1, avo.attr2,avo.attr3)

 const carro={
  velAtual:0,
  velMax:200,
  acelerarMais(delta){
    if(this.velAtual+delta <= this.velMax){
      this.velAtual+=delta;
    }else{
      this.velAtual=this.velMax;
    }
  },
  status(){
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`
  }

 }
//no momento que eu defino a ferrari como tendo o prototipo o carro o atributo velMax irá sombrear o atributo  original do objeto carro que é o shadowing

 const ferrari={
  modelo:'F40',
  velMax:324//shadowing 
}

const volvo={
  modelo:'V40',
  status() {
    //eu estou sobrescrevendo a função status, a partir do meu objeto volvo
    return `${this.modelo}: ${super.status()}`}  //eu uso o super() para referenciar o meu prototipo
}

//estabelecer a relação de protótipo, nesse momento eu estabeleci uma relação entre ferrari e carro
Object.setPrototypeOf(ferrari, carro);//ferrari tem carro como seu prototipo
Object.setPrototypeOf(volvo,carro);

//mostra apenas os atributos que foram definifidos no objeto
console.log(ferrari);
//o volvo já chama a função
console.log(volvo);
//Por padrão quando você chama um objeto o tostring() que é a função que converte um objeto para string é chamada
//ele vai ler os atributos e funções que pertencem ao objeto


volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());