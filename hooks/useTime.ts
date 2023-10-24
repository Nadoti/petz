import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"
import { errorNotification, notification } from "../utils/notification"


const fetcher = (date: string): AxiosPromise<|string[] | undefined> => {
  return axios.post("http://localhost:3000/api/scheduling/time", {
    date: date
  })
}

export function useTime(date: string) {

  const { data, error, isError } = useQuery({
    queryFn: () => fetcher(date),
    queryKey: ['time'],
    retry: 3,
    refetchOnWindowFocus: false,
  })

  if(isError) {
    notification({type: errorNotification, message: error.message})
  }
  return {
    timeData: data?.data
  }
}