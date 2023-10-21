import { useState } from "react"
import Head from "next/head";
import { DetailsPage } from "../../components/DetailsPage";
import { FormScheduleAppointment } from "@/components/scheduleAppointment/FormScheduleAppointment";
import { SchedulingResult } from "@/components/scheduleAppointment/SchedulingResult";
import check from "public/check.svg"
import warning from "public/warning.svg"
import { PokemonContextProvider } from "context/PokemonContext";

type IStep = {
  [key: string]: React.ReactNode
}

export const formStep= "formStep";
export const sucessStep = "sucessStep";
export const errorStep = "errorStep";

export default function ScheduleAppointmentPage() {
  const [stepAppointment, setStepAppointment] = useState(formStep)

  const stepByStep: IStep = {
    formStep: <FormScheduleAppointment setStepAppointment={setStepAppointment} />,
    sucessStep: <SchedulingResult setStepAppointment={setStepAppointment} imageSrc={check} message="Seu agendamento para dia xx/xx/xxxx, às 00h00m, para 0x pokémons foi realizado com sucesso!" title="Consulta Agendada"/>,
    errorStep: <SchedulingResult setStepAppointment={setStepAppointment} imageSrc={warning} message="Seu agendamento para dia xx/xx/xxxx, às 00h00m, para 0x pokémons foi realizado com sucesso!" title="Houve um problema no agendamento"/>,
  }

  return (
    <main className="relative min-h-screen-bg-image w-full bg-white">
      <Head>
        <title>Quem somos</title>
        <meta name="Formulario" content="Formulário para cadastro de pokemons" key="desc"/>
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
      </Head>
      <DetailsPage 
        title="Agendar Consulta"
        text="Recupere seus pokémons em 5 segundos"
      />
      <PokemonContextProvider>
        {stepByStep[stepAppointment]}
      </PokemonContextProvider>
    </main>
  )
}