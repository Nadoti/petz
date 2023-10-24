import Link from "next/link";
import { LogoNav } from "./LogoNav";
import { BtnScheduleNewAppointment } from "./BtnScheduleNewAppointment";

export function Header() {

  return (
    <header className="w-full bg-white">
      <nav className="flex items-center justify-between px-2 p-2 sm:px-20 sm:py-5">
        <LogoNav />
        <div className="flex items-center gap-4 sm:gap-8">
          <Link href="/quem-somos" className="text-black text-xs sm:text-sm">
            Quem Somos
          </Link>
          <BtnScheduleNewAppointment text="Agendar Consulta"/>
        </div>
      </nav>
    </header>
  )
}