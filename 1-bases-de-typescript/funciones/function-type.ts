;(() => {
  const addNumber = (a: number, b: number) => a + b
  const greet = (name: string) => `Hola ${name}`
  const saveTheWorld = () => `Mundo salvado`

  // Definicion de funciones para cada caso concreto

  // let myFunc: Function
  // let myFunc: (a: number, b: number) => number
  // let myFunc: (a: string) => string
  let myFunc: () => string

  myFunc = 10

  myFunc = addNumber
  console.log(myFunc(1, 2))

  myFunc = greet
  console.log(myFunc('Leon'))

  myFunc = saveTheWorld
  console.log(myFunc())
})()
