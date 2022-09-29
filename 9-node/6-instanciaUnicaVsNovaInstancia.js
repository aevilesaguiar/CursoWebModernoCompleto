//Instancia Unica Vs Nova Instancia

//Como o node faz cache de módulos que são importados a partir da função require
//Quando você importa um módulo por padrão esse módulo é cacheado

//Uma forma de driblar esse módulo singleton é usar uma função factory
//ou seja se você quiser importar um módulo e que toda vida um novo objeto seja gerado
//você pode usar uma função factory
//
//função Factory(função fabrica): é uma função que retorna um objeto, o objetivo dela é fabricar uma instancia de um objeto
