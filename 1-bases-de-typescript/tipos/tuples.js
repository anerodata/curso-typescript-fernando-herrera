"use strict";
;
(() => {
    const students = ['José Luis', 23, false];
    // Error
    students[0] = 49;
    // Error
    students[1] = '23';
})();
