"use strict";
;
(() => {
    // Simbolo de interrogacion tras nombre.
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no last name'}`;
    };
    const name = fullName('Tony');
})();
