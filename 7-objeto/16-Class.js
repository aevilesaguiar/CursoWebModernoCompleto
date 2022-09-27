class Lancamento{
    constructor(nome='Generico', valor=0){
        this.nome=nome;
        this.valor=valor;
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes=mes;
        this.ano=ano;
        this.lancamentos=[]
    }
    addLancamentos(...lancamentos){//esse operador aceita parametros variaveis
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidade =0;
        this.lancamentos.forEach(l=>{
            //acrescenta todos os valores consolidados que adcionei no meu ciclo financeiro
            valorConsolidade+=l.valor
        })
        return valorConsolidade;
    }
}

const salario = new Lancamento('Salario',45000);//crédito
const contaDeLuz=new Lancamento('Luz',-220)  //débito


const contas = new CicloFinanceiro(6,2018);
contas.addLancamentos(salario, contaDeLuz);
console.log(contas.sumario());
