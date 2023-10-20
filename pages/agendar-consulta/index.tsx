import Head from "next/head";
import { DetailsPage } from "../../components/DetailsPage";
import { FormScheduleAppointment } from "../../components/scheduleAppointment/FormScheduleAppointment";


export default function AgendarConsulta() {
  return (
    <main className="min-h-screen-bg-image w-full bg-white">
      <Head>
        <title>Quem somos</title>
      </Head>
      <DetailsPage 
        title="Agendar Consulta"
        text="Recupere seus pokémons em 5 segundos"
      />
      <div className="w-full pt-9 pb-16">
        <div className="w-full max-w-[652px] mx-auto">
          <h2 className="text-2xl font-semibold text-black mb-8">Preencha o formulário abaixo para agendar sua consulta</h2>
          <FormScheduleAppointment />
        </div>
      </div>
    </main>
  )
}