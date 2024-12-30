"use strict";
;
(() => {
    // Asignar parametro upper opcional
    const fullName = (firstName, lastName, upper = false) => {
        return `${firstName} ${lastName || 'no last name'}`;
    };
    const name = fullName('Tony');
})();
