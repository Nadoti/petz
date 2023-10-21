import { useEffect, useState} from "react"
import Link from "next/link";
import { Logo } from "./Logo";
import { usePathname } from "next/navigation"

export function LogoNav() {
  const [isHovered, setIsHovered] = useState(true);
  const navigation = usePathname()

  useEffect(() => {
    if(navigation !== "/") {
      setIsHovered(false)
      return;
    }
    const timeout = setTimeout(() => {
      setIsHovered(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Link href="/"
      className={`relative w-16 h-16 bg-red-500 text-white flex items-center justify-center transition-all duration-500 overflow-hidden rounded-full ${
        isHovered ? 'w-64' : 'w-16'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="home page"
    >
      <span className="absolute left-0 ml-3"><Logo /></span>
      <span
        className={` whitespace-nowrap transition-opacity transform  font-bold ${
          isHovered ? 'visible opacity-100 delay-300 transform translate-x-[10px]' : 'invisible opacity-0 translate-x-[-30px]'
        }`}
      >
        Centro Pokémon
      </span>
    </Link>
  )
}