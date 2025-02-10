import { printObj, genericFn } from '../generics/generics'
import { Villian, Hero } from '../interfaces'
// Interfaces agrupadas
//
// printObj(123)
// printObj(new Date())
// printObj('pepito')
// genericFn(3.14).toFixed(2)
// La siguiente linea da error. Con el ejemplo comentado de genericFn no se avisaba. Con el que esta en memoria actualmente, si:
// genericFn('Hola mundo').toFixed(2)
// genericFn(4.2446).toFixed(2)
const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston',
  dangerLevel: 130
}

console.log(genericFn<Villian>(deadpool).dangerLevel)
