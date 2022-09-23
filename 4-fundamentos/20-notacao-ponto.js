//Notação ponto(.)

console.log(typeof console);

console.log(Math.ceil(6.1)) //arredonda o numero

const obj1={};
obj1.nome='Bola';
//obj1['nome']='Bola2'; //essa notação é igual a ntação acima
console.log(obj1.nome);

console.log("*****************")
//quando eu uso this eu posso tanto atributos quantos funções que serão expostas para fora dessa função quando ela for instanciada
function Obj(nome){
    this.nome=nome;
    this.exec=function(){
        console.log('Exec...')
    }

}

const obj2= new Obj('Cadeira');
const obj3= new Obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();







