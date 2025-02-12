import axios from 'axios'
import { Pokemon } from '../interfaces'

// El generico que va entre <> indica el tipo de dato que devolveria la promesa
export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
  const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  //console.log(resp.data.abilities[0].is_hidden)
  return data
}
