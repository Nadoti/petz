import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"
import { PokemonType } from "../types/pokemon-types"
import { CityDataType } from "../types/city-types"


const fetcher = (url: string): AxiosPromise<PokemonType> => {
  return axios.get(url)
}

export function usePokemon(url: string ) {

  const { data } = useQuery({
    queryFn: () => fetcher(url),
    queryKey: ['pokemon', url]
  })

  return {
    pokemonData: data?.data.pokemon_species
  }
}