import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"
import { RegionType } from "../types/region-types"


const fetcher = (): AxiosPromise<RegionType> => {
  return axios.get("https://pokeapi.co/api/v2/region/")
}

export function useRegion() {

  const { data } = useQuery({
    queryFn: () => fetcher(),
    queryKey: ['region']
  })

  return {
    regionData: data?.data.results
  }
}