"use strict";
;
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `Mundo salvado`;
    // Definicion de funciones para cada caso concreto
    // let myFunc: Function
    // let myFunc: (a: number, b: number) => number
    // let myFunc: (a: string) => string
    let myFunc;
    myFunc = 10;
    myFunc = addNumber;
    console.log(myFunc(1, 2));
    myFunc = greet;
    console.log(myFunc('Leon'));
    myFunc = saveTheWorld;
    console.log(myFunc());
})();
//# sourceMappingURL=function-type.js.map