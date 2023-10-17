import Head from "next/head";
import { DetailsPage } from "../../components/DetailsPage";


export default function AgendarConsulta() {

  return (
    <main className="min-h-screen-bg-image w-full bg-white">
      <Head>
        <title>Quem somos</title>
      </Head>
      <DetailsPage />
      <div className="w-full pt-9 pb-16">
        <div className="w-full max-w-[652px] mx-auto">
          <h2 className="text-2xl font-semibold text-black">Preencha o formulário abaixo para agendar sua consulta</h2>
        </div>
      </div>
    </main>
  )
}