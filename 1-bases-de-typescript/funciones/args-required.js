"use strict";
;
(() => {
    // No se debe tipar con dos tipos un argumento
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    // ts devuelve un error si no le pasas los dos parametros
    const name = fullName('Tony', 'Stark');
    let noname;
    // Se le podria pasar un noname, por eso no esta demas poner sentencias de control de undefined en lo alto de la funcion
    const name = fullName(noname, 'Stark');
})();
