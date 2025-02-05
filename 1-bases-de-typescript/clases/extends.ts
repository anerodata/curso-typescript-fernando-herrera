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
  }

  const raekwon = new EastRapper('Raekwon', 'Corey Woods')
  const tupac = new WestRapper('2pac', 'Tupac Shakur')

  console.log(raekwon)
  console.log(tupac.getFullNameWest())
})()
