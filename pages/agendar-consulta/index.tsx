import Head from "next/head";
import { DetailsPage } from "../../components/DetailsPage";
import { FormScheduleAppointment } from "@/components/scheduleAppointment/FormScheduleAppointment";

export default function ScheduleAppointmentPage() {

  return (
    <main className="relative min-h-screen-bg-image w-full bg-white">
      <Head>
        <title>Quem somos</title>
        <meta name="Formulario" content="Formulário para cadastro de pokemons" key="desc"/>
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta property="og:description" content="And a social description for our cool page"/>
        <meta http-equiv="Cache-control" content="no-cache" />
      </Head>
      <DetailsPage 
        title="Agendar Consulta"
        text="Recupere seus pokémons em 5 segundos"
      />
      <FormScheduleAppointment />
    </main>
  )
}