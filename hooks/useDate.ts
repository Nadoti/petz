import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"


const fetcher = (): AxiosPromise<string[] | undefined> => {
  return axios.get("http://localhost:3000/api/scheduling/date")
}

export function useDate() {

  const { data } = useQuery({
    queryFn: () => fetcher(),
    queryKey: ['date']
  })

  return {
    dateData: data?.data
  }
}