"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
(() => {
    // Despúes de llamar a esta funcion ya no va a funcionar el codigo. No debe tener un punto alcanzable al finalizar la funcion
    const abc = (message) => {
        throw new Error(message);
    };
    abc('Error');
    // Never se utiliza cuando la funcion puede acabar con un error
    const fetchData = (id) => __awaiter(void 0, void 0, void 0, function* () {
        const resp = yield fetch('url');
        if (resp.ok) {
            throw 'Error de conexion';
        }
        return resp;
    });
})();
//# sourceMappingURL=never.js.map