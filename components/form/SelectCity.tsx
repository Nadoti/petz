import { useDataPokemonContext } from "context/PokemonContext";
import { useCloseOnOutsideClick } from "hooks/useCloseOnOutsideClick";
import { useRef, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";



export function SelectCity() {
  const selectRef = useRef<HTMLDivElement | null>(null);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const { cityData, valueSelectedCity, setValueSelectedCity } = useDataPokemonContext()
  useCloseOnOutsideClick(selectRef, isSelectOpen, () => {
    setIsSelectOpen(false);
  });

  return (
    <div className="w-full flex flex-col gap-1">
      <label className="text-xs font-bold text-black">Cidade</label>
      <div
        ref={selectRef}
        className={`relative w-full border border-zinc-300 rounded-lg ${isSelectOpen ? "rounded-b-none" : ""}`}
      >
        <button
          type="button"
          onClick={() => setIsSelectOpen(!isSelectOpen)}
          className="flex w-full items-center justify-between px-4 py-3 cursor-pointer"
          aria-labelledby="select button"
          aria-haspopup="listbox"
          aria-expanded={isSelectOpen}
          aria-controls="select-dropdown"
        >
          <span className="text-sm text-zinc-500">{valueSelectedCity}</span>
          {isSelectOpen
            ? (<AiOutlineUp size={20} className="text-zinc-500" />)
            : (<AiOutlineDown size={20} className="text-zinc-500" />)}
        </button>
        {isSelectOpen
          ? (
            <ul
              className="absolute w-full list-none max-h-28 flex flex-col items-start border border-zinc-300 shadow-lg rounded-b-lg overflow-y-scroll scroll z-10 bg-white"
              role="listbox"
            >
              {cityData?.map((city) => (
                <li
                  key={city.name}
                  className="relative w-full flex items-center justify-sel text-zinc-500 hover:bg-gray-200" role="option">
                  <input
                    type="radio"
                    name={city.name}
                    className={`absolute w-full h-full left-0 opacity-0 cursor-pointer`}
                    value={city.name}
                    onChange={() => {
                      setValueSelectedCity(city.name);
                      setIsSelectOpen(false);
                    }}
                  />
                  <label
                    className={`text-sm px-4 py-1 checked:bg-gray-200 focus:bg-gray-200 `}
                  >
                    {city.name}
                  </label>
                </li>
              ))}

            </ul>
          )
          : null}
      </div>
    </div>

  )
}
