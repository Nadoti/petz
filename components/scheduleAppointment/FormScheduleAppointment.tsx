import { SelectRegionCityForm } from "./SelectRegionCityForm";
import { RegisterTeam } from "./RegisterTeam";
import { ServiceDate } from "./ServiceDate";
import { SchedulingPrice } from "./SchedulingPrice";
import { UserData } from "./UserData";
import { useRouter } from "next/router";
import { useDataPokemonContext } from "context/PokemonContext";

type IFormScheduleAppointment = {
  setStepAppointment: React.Dispatch<React.SetStateAction<string>>;
}

export function FormScheduleAppointment({ setStepAppointment }: IFormScheduleAppointment ) {
  const {timeValue, dateValue, listPokemonRegistered, valueSelectedCity} = useDataPokemonContext()
  const router = useRouter();
  function completeAppointment(event: React.FormEvent) {
    event.preventDefault();
    const { name, surname } = router.query;
    if(!name && surname) {}
  }
  
  return (
    <div className="w-full pt-9 pb-16">
      <div className="w-full max-w-[652px] mx-auto">
        <h2 className="text-2xl font-semibold text-black mb-8">Preencha o formulário abaixo para agendar sua consulta</h2>
        <form onSubmit={completeAppointment}>
          <UserData />
          <SelectRegionCityForm />
          <RegisterTeam />
          <ServiceDate />
          <div className="w-full border-t-2 border-zinc-300 my-8" />
          <SchedulingPrice setStepAppointment={setStepAppointment}/>
        </form>
      </div>
    </div>
  )
}