import { getPokemon } from './generics/get-pokemon'

console.log('hola')
getPokemon(4)
  .then(pokemon => {
    // Interface heredada
    console.log(pokemon.sprites.front_default, 33)
  })
  .catch(err => {
    console.error(err)
  })
