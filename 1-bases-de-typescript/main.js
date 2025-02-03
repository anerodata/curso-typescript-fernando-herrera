"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
;
(() => {
    const rapper = {
        name: 'Raekwon',
        group: 'Wu Tang Clan',
        age: 55
    };
    const { age } = rapper;
    console.log(age.toString());
    const printRapper = (_a) => {
        var { group } = _a, rest = __rest(_a, ["group"]);
        console.log(group, rest);
    };
    printRapper(rapper);
    const rappers = ['Method Man', 'Raekwon', 'U-God'];
    const [, raekwon, uGod] = rappers;
    console.log({ raekwon, uGod });
})();
;
(() => {
    const raekwon = {
        name: 'raekwon',
        group: 'Wu Tang Clan',
        age: 55
    };
    const methodMan = {
        name: 'Method Man',
        group: 'Wu Tang Clan',
        age: 53
    };
    const uGod = {
        name: 'U-God',
        group: 'Wu Tang Clan',
        age: 56
    };
    const rappers = [raekwon, methodMan, uGod];
    for (const rapper of rappers) {
        console.log(rapper.name);
        console.log(rapper.group);
        console.log(rapper.otraCosa);
    }
})();
;
(() => {
    console.log(nombre);
    var nombre = 'Antonio';
})();
//# sourceMappingURL=main.js.map