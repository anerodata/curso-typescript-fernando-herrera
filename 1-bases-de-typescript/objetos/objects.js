"use strict";
;
(() => {
    // Inferencia de tipo
    let rapper1 = {
        name: 'Prodigy',
        age: 34,
        powers: ['Lyrics', 'Depth']
    };
    // Error faltan propiedades
    //flash = {
    //  name2: 'Anothername'
    //}
    // rapper = {
    //   name: 'Albert',
    //   // age: 30,
    //   powers: ['Business'],
    //   getName() {
    //     return this.name
    //   }
    // }
    // En esta situacion, si queremos cambiar un tipo de la propiedad del objeto, habría que cambiar tambien el anterior...
    let rapper2 = {
        name: '2 Pac',
        age: 34,
        powers: ['Charisma', 'Storytelling']
    };
})();
