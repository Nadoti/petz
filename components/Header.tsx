import Link from "next/link";
import { LogoNav } from "./LogoNav";

export function Header() {

  return (
    <header className="w-full bg-white">
      <nav className="flex items-center justify-between px-20 py-5">
        <LogoNav />
        <div className="flex items-center gap-8">
          <Link href="/quem-somos" className="text-black">
            Quem Somos
          </Link>
          <Link href="/agendar-consulta" className="flex items-center gap-5 text-sm bg-red-600 text-white py-3 px-6 rounded-full">
            Agendar Consulta
          </Link>
        </div>
      </nav>
    </header>
  )
}