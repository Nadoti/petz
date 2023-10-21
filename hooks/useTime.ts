import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"


const fetcher = (date: string): AxiosPromise<|string[] | undefined> => {
  return axios.post("http://localhost:3000/api/scheduling/time", {
    date: date
  })
}

export function useTime(date: string) {

  const { data } = useQuery({
    queryFn: () => fetcher(date),
    queryKey: ['time']
  })
  return {
    timeData: data?.data
  }
}