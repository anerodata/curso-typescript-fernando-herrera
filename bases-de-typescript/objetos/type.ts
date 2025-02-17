;(() => {
  type Rapper = {
    name: string
    age: number
    powers: string[]
    getName?: () => string
  }

  let prodigy: Rapper = {
    name: 'Albert',
    age: 34,
    powers: ['Lyrics', 'Depth']
  }

  let tupac: Rapper = {
    name: '2 Pac',
    age: 34,
    powers: ['Charisma', 'Storytelling']
  }
})()
