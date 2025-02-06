;(() => {
  abstract class Animal {
    constructor(
      public name: string,
      public age: number
    ) {
      this.name = name
      this.age = age
    }
  }
  class Dog extends Animal {
    public ladrar(): void {
      console.log('Guau')
    }
  }
  class Cat extends Animal {
    public maullar(): void {
      console.log('Miau')
    }
  }

  const dog: Dog = new Dog('Toby', 3)
  const cat: Cat = new Cat('Felix', 4)
  const printName = (animal: Animal) => {
    console.log('Nombre:', animal.name)
  }

  printName(dog)
  printName(cat)
})()
