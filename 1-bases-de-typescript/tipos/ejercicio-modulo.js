"use strict";
;
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let heroForze;
    (function (heroForze) {
        heroForze[heroForze["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        heroForze[heroForze["fuerzaBatman"] = 1] = "fuerzaBatman";
        heroForze[heroForze["fuerzaFlash"] = 5] = "fuerzaFlash";
        heroForze[heroForze["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(heroForze || (heroForze = {}));
    const fuerzaFlash = heroForze.fuerzaFlash;
    const fuerzaSuperman = heroForze.fuerzaSuperman;
    const fuerzaBatman = heroForze.fuerzaBatman;
    const fuerzaAcuaman = heroForze.fuerzaBatman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=ejercicio-modulo.js.map