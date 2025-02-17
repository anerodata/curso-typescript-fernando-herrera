;(() => {
  // Diferencia con el type: Un tipo no es extendible, una interface, sí. Se usan si estoy TOTALMENTE seguro de que el dato no va a ser extendido
  // Diferencia con la class: Una clase define el comportamiento, una interface, no. Una interfaz solo asegura que un objeto tenga unos metodos, no se encarga de la implementacion
  // Una interface es muy usada para peticiones HTTP
  // Un tipo es más usado cuando sabes que el objeto no va a extender: En redux, tipos de acciones permitidas. En vue, las props de un unico componente
  // El type va con un igual, y la interface parece mas una clase, pero sin implementar los metodos

  interface Rapper {
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
