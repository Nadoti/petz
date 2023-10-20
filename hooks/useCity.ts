import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"
import { CityType } from "../types/city-types"


const fetcher = (url: string): AxiosPromise<CityType> => {
  return axios.get(url)
}

export function useCity(url: string) {

  const { data, isLoading } = useQuery({
    queryFn: () => fetcher(url),
    queryKey: ['city', url]
  })

  return {
    cityData: data?.data.locations,
    pokemonGenerationData: data?.data.main_generation,
    loading: isLoading
  }
}