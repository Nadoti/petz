import { PokemonContextProvider } from "../../context/PokemonContext";
import { Input } from "../form/Input";
import { RegisterTeam } from "./RegisterTeam";
import { SchedulingPrice } from "./SchedulingPrice";
import { SelectRegionCityForm } from "./SelectRegionCityForm";
import { ServiceDate } from "./ServiceDate";


export function FormScheduleAppointment() {
  
  
  return (
    <PokemonContextProvider>
      <form className="">
        <section className="flex gap-4 mb-8">
          <Input 
            label="Nome"
            name="nome"
            id="nome"
            placeholder="Digite seu nome"
            />
          <Input 
            label="Sobrenome"
            name="sobrenome"
            id="sobrenome"
            placeholder="Digite seu Sobrenome"
          />
        </section>
        <SelectRegionCityForm />
        <RegisterTeam />
        <ServiceDate />
        <div className="w-full border-t-2 border-zinc-300 my-8" />
        <SchedulingPrice />
      </form>
    </PokemonContextProvider>
  )
}



// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
//   const data = await res.json()
//   console.log(data)
//   // Pass data to the page via props
//   return { props: { data } }
// }
