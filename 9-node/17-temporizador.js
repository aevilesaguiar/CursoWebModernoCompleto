//temporizador

const schedule = require('node-schedule');

const tarefa1=schedule.scheduleJob('*/5 * 21 * * 2',function(){
    console.log('Executando tarefa 1!', new Date().getSeconds())
});//eu vou executar de 5 em 5 segundos *em qualquer minuto 
                                            //a hora 12* ignoro o dia do mês * e vou dizer que ele vai executar
                                            //na terça feira(0 dom, 1 segunda e 2 terça)


                                            setTimeout(function(){
                                                tarefa1.cancel()
                                                console.log('Cancelando tarefa 1!')
                                            },2000)

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek=[new schedule.Range(1,5)]
regra.hour=12;
regra.second=30;    


const tarefa2= schedule.scheduleJob(regra, function(){
    console.log('Cancelando tarefa 2!', new Date().getSeconds())

})