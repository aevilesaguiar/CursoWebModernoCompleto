//operadores relacionais , quando eu faço uma comparação o resultado será sempre true ou false

console.log('01)','1'==1 );//"estou comparando apenas valor não me preocupo com o tipo"
console.log('02)','1'===1 );//" estritamente igual, verifica valor e tipo"

console.log('03)','3'!=3 );//"estou comparando apenas valor não me preocupo com o tipo"
console.log('04)','3'!==3 );//" estritamente diferente, verifica valor e tipo"

console.log('05)',3>2 ); 
console.log('06)',3<2 );

console.log('07)',3>=2 ); 
console.log('08)',3<=2 );


const d1= new Date(0);
const d2= new Date(0);
console.log('9)',d1===d2 ); //aqui ele só compara a referencia de memória
console.log('10)',d1==d2 );

console.log('11)',d1.getTime()===d2.getTime());//aqui eu estou comparando number
console.log('12)',d1.getTime()==d2.getTime());//aqui eu estou comparando number

console.log('13)',undefined==null);
console.log('14)',undefined===null);

//melhor usar o estritamente igual (===)
