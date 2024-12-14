"use strict";
;
(() => {
    var _a;
    const name = 'Antonio';
    const surname = 'Sánchez';
    name.trim();
    // No se sugiere ningún metodo de string
    // surname.tr
    // Esto daría un error por consola pero TS no nos lo muestra
    console.log(name[40].toUpperCase());
    // Esto no, solo aplicaría toUpperCase si existe el char 40
    console.log((_a = name[40]) === null || _a === void 0 ? void 0 : _a.toUpperCase());
})();
