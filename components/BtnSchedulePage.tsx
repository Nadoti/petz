import { useRouter } from "next/navigation";
import { useDataPokemonContext } from "context/PokemonContext";

export function BtnScheduleNewAppointment({ text }: {text: string}) {
  const router = useRouter();
  const {setValueSelectedCity, setListPokemonRegistered, setValueListPokemonRegistered, setDateValue, setTimeValue, setCityUrl} = useDataPokemonContext()
  return (
    <button
      onClick={() => {
        setTimeValue("Selecione um horário")
        setValueSelectedCity("Selecione sua cidade")
        setListPokemonRegistered([])
        setValueListPokemonRegistered({})
        setDateValue("Selecione uma data")
        setCityUrl("")
        router.push("/agendar-consulta")
      }}
      type="button"
      className="text-xs sm:text-sm text-white font-bold py-3 px-4 border rounded-3xl transition-all  bg-red-600 hover:bg-transparent hover:border-red-600 hover:text-red-600"
    >
      {text}
    </button>
  )
}