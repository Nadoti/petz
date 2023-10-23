import { useDataPokemonContext } from "context/PokemonContext"
import { SelectTreatment } from "../form/SelectTreatment"

export function ServiceDate() {
  const { dateData, dateValue, setDateValue, timeData, timeValue, setTimeValue } = useDataPokemonContext()
  return (
    <section className="w-full flex flex-col sm:flex-row gap-4">
      <SelectTreatment 
        value={dateValue}
        setValue={setDateValue}
        valueList={dateData}
        label="Data para Atendimento"
      />
      <SelectTreatment 
        value={timeValue}
        setValue={setTimeValue}
        valueList={timeData}
        label="Horário de Atendimento"
      />
    </section>
  )
}