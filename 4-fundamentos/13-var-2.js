//em js fuja do escopo global
var numero=50;

{
    var numero=2;
    console.log('dentro =', numero);

}

console.log('fora= '+numero)

//dessa forma ele sobrescreve