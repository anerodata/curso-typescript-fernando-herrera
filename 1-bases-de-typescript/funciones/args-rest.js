"use strict";
;
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const worker = fullName('Braulio', 'Del Monte', 'Ataúlfo');
})();
