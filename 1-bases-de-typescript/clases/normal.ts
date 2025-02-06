;(() => {
  // Clase más habitual
  class Rapper {
    static avgAge: number = 34
    static getName(): string {
      return this.name
    }
    static getRealName(): string {
      return this.realName
    }
    constructor(
      private realName: string = '',
      public group: string = '',
      public age: number = 0
    ) {
      this.realName = realName
      this.group = group
      this.age = age
    }
    // Metodo publico
    bio(): string {
      return `${this.realName}, ${this.group}`
    }
  }

  const raekwon: Rapper = new Rapper('Raekwon', 'Wu Tang Clan')
  //console.log(raekwon.bio())

  // No existe este acceso en JS. Un metodo statico solo puede ser accedido desde el nombre de la clase
  //console.log(Rapper.getRealName())
})()
