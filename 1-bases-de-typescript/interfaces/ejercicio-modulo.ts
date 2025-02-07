// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = (auto: Auto): void => {
  auto.encender = true
  auto.velocidadMaxima = 100
  auto.acelear()
}

interface Auto {
  encender: boolean
  velocidadMaxima: number
  acelear(): void
}

const batimovil: Auto = {
  encender: false,
  velocidadMaxima: 0,
  acelear() {
    console.log('...... gogogo!!!')
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Clown {
  reir: boolean
  comer: boolean
  llorar: boolean
}

const guason: Clown = {
  reir: true,
  comer: true,
  llorar: false
}

const reir = (guason: Clown): void => {
  if (guason.reir) {
    console.log('JAJAJAJA')
  }
}

// Cree una interfaz para la siguiente funcion

interface CiudadGoticaFn {
  (ciudadanos: string[]): number
}

const ciudadGotica: CiudadGoticaFn = (ciudadanos: string[]): number => {
  return ciudadanos.length
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Citizen {
  nombre: boolean
  edad: number
  sexo: string
  estadoCivil: string
  imprimirBio(): void
}

class Persona implements Citizen {
  constructor(
    public nombre: boolean,
    public edad: number,
    public sexo: string,
    public estadoCivil: string
  ) {}
  imprimirBio(): void {
    console.log('imprime Bio')
  }
}
