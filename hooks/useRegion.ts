import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"
import { RegionType } from "../types/region-types"
import { errorNotification, notification } from "utils/notification"

const fetcher = (): AxiosPromise<RegionType> => {
  return axios.get("https://pokeapi.co/api/v2/region/")
}

export function useRegion() {

  const { data, error, isError } = useQuery({
    queryFn: () => fetcher(),
    queryKey: ['region'],
    retry: 3,
    refetchOnWindowFocus: false,
  })

  if(isError) {
    notification({type: errorNotification, message: error.message})
  }
  return {
    regionData: data?.data.results
  }
}