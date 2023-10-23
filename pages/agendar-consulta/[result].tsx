import { DetailsPage } from "@/components/DetailsPage";
import { SchedulingResult } from "@/components/scheduleAppointment/SchedulingResult";
import { useDataPokemonContext } from "context/PokemonContext";
import { useRouter } from "next/router";
import check from "public/check.svg"
import warning from "public/warning.svg"


export default function ResultSchedulingPage(){
  
  const router = useRouter();
  const { result } = router.query;
  const {timeValue, dateValue, listPokemonRegistered} = useDataPokemonContext()
  const  formattedTime = timeValue.substring(0, 5);
  const messageScheduleSucess = `Seu agendamento para dia ${dateValue}, às ${formattedTime}m, para 0${listPokemonRegistered.length} pokémons foi realizado com sucesso!`

  return (
    <main className="relative min-h-screen-bg-image w-full bg-white">
      <DetailsPage 
        title="Agendar Consulta"
        text="Recupere seus pokémons em 5 segundos"
      />
      {result === "success"
        ? (<SchedulingResult imageSrc={check} message={messageScheduleSucess} title="Consulta Agendada"/>)
        : (<SchedulingResult imageSrc={warning} message="Todos os campos precisam ser preenchidos, tente novamente!" title="Houve um problema no agendamento"/>)
      }
    </main>
  )
}