import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"
import { CityType } from "../types/city-types"
import { errorNotification, notification } from "utils/notification"


const fetcher = (url: string): AxiosPromise<CityType> => {
  return axios.get(url)
}

export function useCity(url: string) {

  const { data, isLoading, error, isError } = useQuery({
    queryFn: () => fetcher(url),
    queryKey: ['city', url],
    retry: 3,
    refetchOnWindowFocus: false,
  })

  if(isError) {
    notification({type: errorNotification, message: error.message})
  }

  return {
    cityData: data?.data.locations,
    pokemonGenerationData: data?.data.main_generation,
    loading: isLoading
  }
}