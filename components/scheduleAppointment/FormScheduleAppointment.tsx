import { SelectRegionCityForm } from "./SelectRegionCityForm";
import { RegisterTeam } from "./RegisterTeam";
import { ServiceDate } from "./ServiceDate";
import { SchedulingPrice } from "./SchedulingPrice";
import { UserData } from "./UserData";

import { useRouter as userNavigation } from "next/navigation";
import { useDataPokemonContext } from "context/PokemonContext";
import { errorNotification, notification, sucessNotification } from "utils/notification";

export function FormScheduleAppointment( ) {
  const {ifAllDataIsFilled} = useDataPokemonContext()
  
  const navigation = userNavigation();

  function completeAppointment(event: React.FormEvent) {
    event.preventDefault();

    if(ifAllDataIsFilled()) {
      navigation.push("agendar-consulta/success")
      notification({type: sucessNotification, message: "Agendamento concluido com sucesso!!"})
      return;
    }
    navigation.push("agendar-consulta/error")
    notification({type: errorNotification, message: "Antes de concluir o agendamento, verifique todos os campos!"})
  }
  
  return (
    <div className="w-full pt-4 px-2 sm:px-0 sm:pt-9 pb-16">
      <div className="w-full max-w-[652px] mx-auto">
        <h2 className="text-lg sm:text-2xl font-semibold text-black mb-8">Preencha o formulário abaixo para agendar sua consulta</h2>
        <form onSubmit={completeAppointment}>
          <UserData />
          <SelectRegionCityForm />
          <RegisterTeam />
          <ServiceDate />
          <div className="w-full border-t-2 border-zinc-300 my-8" />
          <SchedulingPrice />
        </form>
      </div>
    </div>
  )
}