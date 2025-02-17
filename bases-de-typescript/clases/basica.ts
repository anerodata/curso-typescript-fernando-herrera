;(() => {
  class Rapper {
    private name: string = 'Pep'
    public group: string
    // Sin estado, por defecto: public
    age?: number = 0
    static bestSong: string = 'Sneakers'
    constructor(name: string, group: string, age?: number) {
      this.name = name
      this.group = group
      // Opcional, undefined por defecto
      this.age = age
    }
  }

  const raekwon: Rapper = new Rapper('Raekwon', 'Wu Tang Clan')
  //console.log(raekwon)
  //console.log(Rapper.bestSong)
})()
