;(() => {
  class Rapper {
    constructor(
      public name: string,
      public realName: string
    ) {
      this.name = name
      this.realName = realName
    }
    protected getFullName() {
      return `${this.name}, ${this.realName}`
    }
  }

  // El construcor de Rapper es llamado. En el momento en que se defina el constructor, debe contener super()
  class EastRapper extends Rapper {}
  class WestRapper extends Rapper {
    constructor(
      public name: string,
      public realName: string
    ) {
      super(name, realName)
    }
    public getFullNameWest() {
      return `${super.getFullName()}, west`
    }
    get fullName() {
      return `${this.name}, ${this.realName}`
    }

    set fullName(value: string) {
      if (value.length < 3) throw 'Nombre muy corto'
      this.name = value
    }
  }

  const raekwon = new EastRapper('Raekwon', 'Corey Woods')
  const tupac = new WestRapper('2pac', 'Tupac Shakur')

  // console.log(raekwon)
  // console.log(tupac.getFullNameWest())
  // console.log(tupac.fullName)
  tupac.fullName = 'Paco'
  // console.log(tupac.fullName)
})()
