//Padrão Middleware ou Pattern Chain(cadeia) of Responsibility

//Express é fortemente baseado nesse padrão

//No padrão chain não existe acoplamento nos próximos passos
// Processo A tem 3 funções
//              _____________         _____________      ______________
//  Request    |             |       |             |     |             |
//      ------>|Middleware A |       |Middleware B |     |Middleware C |
//  Response   |       next()|--->   |       next()|---> |             |
//             |_____________|       |_____________|     |_____________|  
//                                                              |
//                                                              |
//                                                        <-----|
//                                                 Envia a resposta (ou não)...

// existe uma dependencia do A, chamar o B, do B chamar o C
//Mas não existe dependencia dos passos, se o Mideware não quiser
//