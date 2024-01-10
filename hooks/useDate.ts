import { useQuery } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"
import { errorNotification, notification } from "../utils/notification"

const fetcher = (): AxiosPromise<string[] | undefined> => {
  return axios.get("https://petz-seven.vercel.app/api/scheduling/date")
}

export function useDate() {

  const { data, error, isError } = useQuery({
    queryFn: () => fetcher(),
    queryKey: ['date'],
    retry: 3,
    refetchOnWindowFocus: false,
  })

  if(isError) {
    notification({type: errorNotification, message: error.message})
  }

  return {
    dateData: data?.data
  }
}
