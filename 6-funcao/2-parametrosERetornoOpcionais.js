function area(largura , altura){
    const area = largura * altura;
    if(area > 20){
        console.log( `Valor acima do permitido: ${area}m2.`)
    }else{
        return area;
    }
}
console.log(area(1,9));
console.log(area(10,9));
console.log(area(2));
console.log(area(10,9,6,1));
console.log(area(1,9,45,1));
