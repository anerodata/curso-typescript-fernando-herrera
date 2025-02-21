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

// Se ejecuta en el momento en el que se inicie la clase. Es decir, solo se llama una vez en el momento de la transpilacion
// Factoria de decoradores. Los decoradores pueden cambiar completamente la funcionalidad de la clase
@printToConsoleConditional(true)
export class Pokemon {
  public publicApi: string = `https://pokeapi.co`
  constructor(public name: string) {}
}
