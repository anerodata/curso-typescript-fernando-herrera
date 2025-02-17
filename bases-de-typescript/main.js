"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => (text.length > 3 ? true : false);
    Validations.validateDate = (date) => (isNaN(date.valueOf()) ? false : true);
})(Validations || (Validations = {}));
Validations.validateDate(new Date('hola'));
//# sourceMappingURL=main.js.map