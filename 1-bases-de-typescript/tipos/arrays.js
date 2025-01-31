"use strict";
;
(() => {
    // El arreglo no tiene un tipo específico
    const numbers = [1, '2', 3];
    // Pero si se le puede definir el tipo de dato que contiene el arreglo
    const arr = [1, '2', 3];
    // Lo coherente es declararlos solo de un tipo
    const fruits = ['Apple', 'Orange', 'Grapes'];
    // El sugeridor te permite invocar metodos de script como toUpperCase porque TS sabe que son strings
    fruits.forEach(fruit => fruit.toUpperCase());
})();
//# sourceMappingURL=arrays.js.map