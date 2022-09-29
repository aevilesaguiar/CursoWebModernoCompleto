//uma factory retorna um novo objeto
//ELE RETORNA UMA FUNÇÃO =()=>{...
module.exports=()=>{
    return {
        valor:1,
        //contador
        inc(){
            this.valor++;
        }
    }
}