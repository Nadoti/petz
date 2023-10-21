import Image from "next/image"
import { formStep } from "pages/agendar-consulta";

type IResultFormAppointment = {
  imageSrc: string
  title: string;
  message: string;
  setStepAppointment: React.Dispatch<React.SetStateAction<string>>;
}

export function SchedulingResult({ imageSrc, title, message, setStepAppointment}: IResultFormAppointment) {

  return (
    <section className="absolute top-0 bottom-0 w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-5 w-full max-w-md border border-red-400 rounded-lg py-5 px-10 bg-red-50">
        <h3 className="text-xl font-bold text-center text-black">{title}</h3>
        <Image src={imageSrc} width={42} height={42}alt="Check"/>
        <p className="text-sm text-zinc-500 text-center">{message}</p>
        <button
          onClick={() => setStepAppointment(formStep)}
          type="button"
          className="text-white font-bold py-3 px-2 border rounded-3xl transition-all  bg-red-600 hover:bg-transparent hover:border-red-600 hover:text-red-600"
        >
          Fazer Novo Agendamento
        </button>
      </div>
    </section>
  )
}