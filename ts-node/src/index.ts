import { Pokemon } from './decorators/pokemon-class-2'
import { getPokemon } from './generics/get-pokemon'

// getPokemon(4)
//   .then(pokemon => {
//     // Interface heredada
//     console.log(pokemon.sprites.front_default)
//   })
//   .catch(err => {
//     console.error(err)
//   })

const charmander = new Pokemon('Charmander')

// Da un error en consola porque hemos bloqueado el prorotipo con un decorador
;(Pokemon.prototype as any).customName = 'Pik'
