;(() => {
  type Rapper = {
    name: string
    age: number
    powers: string[]
    getName?: () => string
  }

  let myCustomVar: string | number | Rapper = 'Roberto'
  myCustomVar = 20

  // Puede ser de tipo rapper, da erores si no definimos un tipo bien
  myCustomVar = {
    name: 'Method Man',
    age: 43,
    powers: [1, 2]
  }
  // Si se imprime en consola el tipo de esto, veras Objeto. En JS no existen tipos, aunque si clases
})()
