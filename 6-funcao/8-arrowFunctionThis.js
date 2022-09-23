function Pessoa(){

    this.idade=0

setInterval( () => {
   this.idade++;
    console.log(this.idade)
},1000)
}

//instanciando o objeto pessoa a partir dessa função 
new Pessoa