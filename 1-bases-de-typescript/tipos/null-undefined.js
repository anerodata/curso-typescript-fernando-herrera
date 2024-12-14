"use strict";
;
(() => {
    let nada = undefined;
    let nully = null;
    // sin la restricción stricNullChecks no daría error asignar undefined o null a un boleano
    let isActive = null;
})();
