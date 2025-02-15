// Un decorador es una funcion
function printToConsole(constructor: Function) {
  // Se imprime la class Pokemon
  console.log(constructor)
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole
  }
  return () => {}
}

// Un factory decorator es una funcion que retorna otra funcion.
// Esta última si se usa con un decorador de metodo se va a disparar con cierto tipo de argumentos
function CheckValidPokemonId() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error('El id del pokemon debe estar entre 1 y 800')
      }
      return originalMethod(id)
    }
    console.log({ target, propertyKey, descriptor })
  }
}

const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}

// Se ejecuta en el momento en el que se inicie la clase. Es decir, solo se llama una vez en el momento de la transpilacion
// Factoria de decoradores. Los decoradores pueden cambiar completamente la funcionalidad de la clase
@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon {
  public publicApi: string = `https://pokeapi.co`
  constructor(public name: string) {}

  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log('pokemon guardado', id)
  }
}
