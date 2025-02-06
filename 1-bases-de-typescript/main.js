"use strict";
;
(() => {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.name = name;
            this.age = age;
        }
    }
    class Dog extends Animal {
        ladrar() {
            console.log('Guau');
        }
    }
    class Cat extends Animal {
        maullar() {
            console.log('Miau');
        }
    }
    const dog = new Dog('Toby', 3);
    const cat = new Cat('Felix', 4);
    const printName = (animal) => {
        console.log('Nombre:', animal.name);
    };
    printName(dog);
    printName(cat);
})();
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
        get fullName() {
            return `${this.name}, ${this.realName}`;
        }
        set fullName(value) {
            if (value.length < 3)
                throw 'Nombre muy corto';
            this.name = value;
        }
    }
    const raekwon = new EastRapper('Raekwon', 'Corey Woods');
    const tupac = new WestRapper('2pac', 'Tupac Shakur');
    tupac.fullName = 'Paco';
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
})();
;
(() => {
    class ShoppingCart {
        constructor(items) {
            this.items = items;
            this.items = items;
        }
        static createShopingCart() {
            if (!ShoppingCart.instance) {
                ShoppingCart.instance = new ShoppingCart([]);
            }
            return ShoppingCart.instance;
        }
        addItem(item) {
            this.items.push(item);
        }
    }
    const shoppingCart1 = ShoppingCart.createShopingCart();
    shoppingCart1.addItem('tomate');
    const shoppingCart2 = ShoppingCart.createShopingCart();
    const shoppingCart3 = ShoppingCart.createShopingCart();
    console.log(shoppingCart1, shoppingCart2, shoppingCart3);
})();
//# sourceMappingURL=main.js.map