"use strict";
;
(() => {
    class Rapper {
        constructor(name, group, age) {
            this.name = 'Pep';
            this.age = 0;
            this.name = name;
            this.group = group;
            this.age = age;
        }
    }
    Rapper.bestSong = 'Sneakers';
    const raekwon = new Rapper('Raekwon', 'Wu Tang Clan');
    console.log(raekwon);
    console.log(Rapper.bestSong);
})();
;
(() => {
    class Rapper {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name}, ${this.realName}`;
        }
    }
    class EastRapper extends Rapper {
    }
    class WestRapper extends Rapper {
        constructor(name, realName) {
            super(name, realName);
            this.name = name;
            this.realName = realName;
        }
        getFullNameWest() {
            return `${super.getFullName()}, west`;
        }
    }
    const raekwon = new EastRapper('Raekwon', 'Corey Woods');
    const tupac = new WestRapper('2pac', 'Tupac Shakur');
    console.log(raekwon);
    console.log(tupac.getFullNameWest());
})();
;
(() => {
    class Rapper {
        static getName() {
            return this.name;
        }
        static getRealName() {
            return this.realName;
        }
        constructor(realName = '', group = '', age = 0) {
            this.realName = realName;
            this.group = group;
            this.age = age;
            this.realName = realName;
            this.group = group;
            this.age = age;
        }
        bio() {
            return `${this.realName}, ${this.group}`;
        }
    }
    Rapper.avgAge = 34;
    const raekwon = new Rapper('Raekwon', 'Wu Tang Clan');
    console.log(raekwon.bio());
    console.log(Rapper.getRealName());
})();
//# sourceMappingURL=main.js.map