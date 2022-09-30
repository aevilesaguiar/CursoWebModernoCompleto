//criar um pequeno objeto que vai representar uma sequencia que vai pegar os ids dos objetos que vou persistir
const sequence={
    _id:1,//é apenas uma convençao para private
    //função get que vai retornar o  id de fato
    //_id++ ele vai sempre retornar o proximo valor de id 
    get id(){ return this._id++}

}
//objeto
const produtos={}

function salvarproduto(produto){
    //se o id do produto não estiver setado, eu vou fazer produto.id recebe sequence.id
    if(!produto.id) produto.id = sequence.id;
    //se o produto estiver setado ele substitui pela versão mais nova
    //caso não estiver setado ele adiciona um novo elemento/atributo dentro de produtos
    //que vai ser extamente o id do produto vai ser 1,2,3......
    produtos[produto.id]=produto;
    return produto;

}

function getProdutoPorId(id){
    //ele retorna produtos[id] caso esteja nulo ele retorna um objeto vazio
    return produtos[id] || {}
}


function getProdutos(){

    return Object.values(produtos);//reotna todos os valores que estão dentro de produtos
}


function excluirProduto(id){

    const produto = produtos[id];
    delete produtos[id];

    return produto; //retorna o produto qye eu acabei de excluir
}




    module.exports= { salvarproduto, getProdutos,getProdutoPorId, excluirProduto }


