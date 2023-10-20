import { useEffect, useRef, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { RegionDataType } from "../../types/region-types";
import { useRegion } from "../../hooks/useRegion";
import { useDataPokemonContext } from "../../context/PokemonContext";


export function SelectRegion() {
  const selectRef = useRef<HTMLDivElement | null>(null);
  const { regionData } = useRegion();
  const { setCity, setValueSelectedCity, setValueSelectedPokemon } = useDataPokemonContext();
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [valueSelected, setValueSelected] = useState("Selecione sua cidade");

  function closeSelect() {
    setIsSelectOpen(false);
  };

  function handleClickOutside(event: MouseEvent) {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      closeSelect();
    }
  };

  function onChangeSelect(region: RegionDataType) {
    setValueSelectedCity("Selecione sua cidade")
    setValueSelectedPokemon("Selecione seu pokémon")
    setCity(region.url)
    setValueSelected(region.name);
    setIsSelectOpen(false);
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex flex-col gap-1">
      <label className="text-xs font-bold text-black">Região</label>
      <div
        ref={selectRef}
        className={`relative w-full border border-zinc-300 rounded-lg ${isSelectOpen ? "rounded-b-none" : ""}`}
      >
        <button
          type="button"
          onClick={() => setIsSelectOpen(!isSelectOpen)}
          className="flex w-full items-center justify-between px-4 py-3 cursor-pointer"
        >
          <span className="text-sm text-zinc-500">{valueSelected}</span>
          {isSelectOpen
            ? (<AiOutlineUp size={20} className="text-zinc-500" />)
            : (<AiOutlineDown size={20} className="text-zinc-500" />)}
        </button>
        {isSelectOpen
          ? (
            <ul
              className="absolute w-full list-none max-h-28 flex flex-col items-start border border-zinc-300 shadow-lg rounded-b-lg overflow-y-scroll scroll z-10 bg-white"
            >
              {regionData?.map((region) => (
                <li
                  key={region.name}
                  className="relative w-full flex items-center justify-sel text-zinc-500 hover:bg-gray-200">
                  <input
                    type="radio"
                    name={region.name}
                    className={`absolute w-full h-full left-0 opacity-0 cursor-pointer`}
                    value={region.name}
                    onChange={() => onChangeSelect(region)}
                  />
                  <label
                    className={`text-sm px-4 py-1 checked:bg-gray-200 focus:bg-gray-200 `}
                  >
                    {region.name}
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
