//Objeto Global no Node
//Assim como no Browser você tem um objeto global que é o window, no node eu também tenho
//que é o global

//console.log(global);

//quando eu incluo no global quer dizer que qualquer arquivo que estiver no meu sistema terá acesso
//a minhaApp
//eu posso usar o freeze para congelar o minha app, para evitar alteração
globalThis.MinhaApp=Object.freeze({
    saudacao(){
        return 'Estou em todos os lugares!';
    },

    //posso incluir um atrbuto nome
    nome :'Sistema Legal'
})