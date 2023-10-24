import Image from "next/image"
import { BtnScheduleNewAppointment } from "../BtnScheduleNewAppointment";


type IResultFormAppointment = {
  imageSrc: string
  title: string;
  message: string;
}

export function SchedulingResult({ imageSrc, title, message}: IResultFormAppointment) {
  
  return (
    <section className="absolute top-0 bottom-0 w-full flex items-center justify-center px-2 sm:px-0">
      <div className="flex flex-col items-center gap-5 w-full max-w-md border border-red-400 rounded-lg py-5 px-10 bg-red-50">
        <h3 className="text-base sm:text-xl font-bold text-center text-black">{title}</h3>
        <Image src={imageSrc} width={42} height={42}alt="Check"/>
        <p className="text-xs sm:text-sm text-zinc-500 text-center">{message}</p>
        <BtnScheduleNewAppointment text="Fazer Novo Agendamento"/>
      </div>
    </section>
  )
}