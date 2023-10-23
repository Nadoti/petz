import { SelectRegion } from "../form/SelectRegion"
import { SelectCity } from "../form/SelectCity"

export function SelectRegionCityForm() {

  return (
    <section className="flex flex-col sm:flex-row gap-4 mb-28">
      <SelectRegion />
      <SelectCity />
    </section>
  )
}