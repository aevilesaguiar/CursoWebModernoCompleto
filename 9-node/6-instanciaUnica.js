//node faz cache por padrão, ou seja mantém essas intancias como sendo singleton
// Singleton especifica que apenas uma instância da classe pode existir, e esta será utilizada por toda a aplicação. 
module.exports= {
    valor:1,
    inc(){
        this.valor ++
    }
}