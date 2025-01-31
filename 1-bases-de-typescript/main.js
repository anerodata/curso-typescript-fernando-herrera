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
    let msg = 'Hola mundo';
    let num = 3;
    function sayHello(msg) { }
})();
;
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        return `${firstName} ${lastName || 'no last name'}`;
    };
    const name = fullName('Tony');
})();
;
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no last name'}`;
    };
    const name = fullName('Tony');
})();
;
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    let noname;
    const name = fullName(noname, 'Stark');
})();
;
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const worker = fullName('Braulio', 'Del Monte', 'Ataúlfo');
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
contar(superHeroes);
const llamarBatman = (llamar) => {
    if (llamar) {
        console.log('Batiseñal activada');
    }
};
llamarBatman(true);
const unirheroes = (...personas) => {
    return personas.join(', ');
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
;
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `Mundo salvado`;
    let myFunc;
    myFunc = 10;
    myFunc = addNumber;
    console.log(myFunc(1, 2));
    myFunc = greet;
    console.log(myFunc('Leon'));
    myFunc = saveTheWorld;
    console.log(myFunc());
})();
;
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return 'Batiseñal activada';
    };
    const heroName = returnName();
})();
const batimovil = {
    carroceria: 'Negra',
    modelo: '6x6',
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: 'Amarillo con negro',
    modelo: '4x2',
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log('Disparando');
    }
};
const villanos = [
    {
        nombre: 'Lex Luthor',
        edad: 54,
        mutante: false
    },
    {
        nombre: 'Erik Magnus Lehnsherr',
        edad: 49,
        mutante: true
    },
    {
        nombre: 'James Logan',
        edad: undefined,
        mutante: true
    }
];
const charles = {
    poder: 'psiquico',
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel']
};
let mystique;
mystique = charles;
mystique = apocalipsis;
;
(() => {
    let rapper1 = {
        name: 'Prodigy',
        age: 34,
        powers: ['Lyrics', 'Depth']
    };
    let rapper2 = {
        name: '2 Pac',
        age: 34,
        powers: ['Charisma', 'Storytelling']
    };
})();
;
(() => {
    let prodigy = {
        name: 'Albert',
        age: 34,
        powers: ['Lyrics', 'Depth']
    };
    let tupac = {
        name: '2 Pac',
        age: 34,
        powers: ['Charisma', 'Storytelling']
    };
})();
;
(() => {
    let myCustomVar = 'Roberto';
    myCustomVar = 20;
    myCustomVar = {
        name: 'Method Man',
        age: 43,
        powers: [1, 2]
    };
})();
;
(() => {
    let avengers = 4;
    let power;
    avengers = 245.444;
    avengers.toFixed(2)(avengers).toFixed(3);
    avengers = 'extraordinaries';
    avengers.charAt(3);
})();
;
(() => {
    const numbers = [1, '2', 3];
    const arr = [1, '2', 3];
    const fruits = ['Apple', 'Orange', 'Grapes'];
    fruits.forEach(fruit => fruit.toUpperCase());
})();
(() => {
    let isSuperman = true;
    let isBadHero = false;
    isSuperman = isBadHero ? false : true;
});
;
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
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
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
;
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["med"] = 5] = "med";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(currentAudio);
    let enumeracion;
    (function (enumeracion) {
        enumeracion[enumeracion["a"] = 10] = "a";
        enumeracion[enumeracion["b"] = 11] = "b";
        enumeracion[enumeracion["c"] = 9] = "c";
        enumeracion[enumeracion["d"] = 10] = "d";
    })(enumeracion || (enumeracion = {}));
})();
;
(() => {
    const abc = (message) => {
        throw new Error(message);
    };
    abc('Error');
    const fetchData = (id) => __awaiter(void 0, void 0, void 0, function* () {
        const resp = yield fetch('url');
        if (resp.ok) {
            throw 'Error de conexion';
        }
        return resp;
    });
})();
;
(() => {
    let nada = undefined;
    let nully = null;
    let isActive = null;
})();
;
(() => {
    let avengers = 5;
    const villians = 20;
    avengers = Number('6A');
})();
;
(() => {
    var _a;
    const name = 'Antonio';
    const surname = 'Sánchez';
    name.trim();
    console.log(name[40].toUpperCase());
    console.log((_a = name[40]) === null || _a === void 0 ? void 0 : _a.toUpperCase());
})();
;
(() => {
    const students = ['José Luis', 23, false];
    students[0] = 49;
    students[1] = '23';
})();
;
(() => {
    const registerUser = () => {
    };
    const a = registerUser();
    console.log(a);
})();
//# sourceMappingURL=main.js.map