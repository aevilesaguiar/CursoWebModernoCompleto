//toda vez que eu criar um modulo com o final Cliente ,significa que essa classe vai usar outros modulos que vamos definir

//para você exportar algo usando commos Js que é o sistema de modules do node vc vai usar a palavra require

//CommonJS é um conjunto de padrões usados ​​para implementar módulos em JavaScript

const moduloA=require('./2-moduloA');//o que eu exportei do modulo A está dentro de uma constante moduloA
const moduloB=require('./2-moduloB');//o que eu exportei do modulo B está dentro armazenado dentro de uma constante moduloB


console.log(moduloA.ateLogo);
console.log(moduloA.bemVindo);
console.log(moduloA.ola);
console.log(moduloA);


console.log(moduloB.bomDia);
console.log(moduloB.boaNoite);


