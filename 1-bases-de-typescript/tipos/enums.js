"use strict";
;
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["med"] = 5] = "med";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    // Sin asignar valores sería una enumeración: min 0, med 1, max 2
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    // 10
    let enumeracion;
    (function (enumeracion) {
        enumeracion[enumeracion["a"] = 10] = "a";
        enumeracion[enumeracion["b"] = 11] = "b";
        enumeracion[enumeracion["c"] = 9] = "c";
        enumeracion[enumeracion["d"] = 10] = "d";
    })(enumeracion || (enumeracion = {}));
    // En este enum d sería igual a 10
    // Como "c" se iguala a 9, el siguiente valor es 10, no importa que se repita el valor de la enumeración.
})();
//# sourceMappingURL=enums.js.map