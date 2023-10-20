import { useEffect, useRef, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useDataPokemonContext } from "../../context/PokemonContext";

type SelectTreatmentType = {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  valueList: string[]
}

export function SelectTreatment({ value, setValue, valueList, label}: SelectTreatmentType) {
  const selectRef = useRef<HTMLDivElement | null>(null);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  
  
  function closeSelect() {
    setIsSelectOpen(false);
  };

  function handleClickOutside(event: MouseEvent) {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      closeSelect();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex flex-col gap-1">
      <label className="text-xs font-bold text-black">{label}</label>
      <div
        ref={selectRef}
        className={`relative w-full border border-zinc-300 rounded-lg ${isSelectOpen ? "rounded-b-none" : ""}`}
      >
        <button
          type="button"
          onClick={() => setIsSelectOpen(!isSelectOpen)}
          className="flex w-full items-center justify-between px-4 py-3 cursor-pointer"
        >
          <span className="text-sm text-zinc-500">{value}</span>
          {isSelectOpen
            ? (<AiOutlineUp size={20} className="text-zinc-500" />)
            : (<AiOutlineDown size={20} className="text-zinc-500" />)}
        </button>
        {isSelectOpen
          ? (
            <ul
              className="absolute w-full list-none max-h-28 flex flex-col items-start border border-zinc-300 shadow-lg rounded-b-lg overflow-y-scroll scroll z-10 bg-white"
            >
              {valueList?.map((value) => (
                <li
                  key={value}
                  className="relative w-full flex items-center justify-sel text-zinc-500 hover:bg-gray-200">
                  <input
                    type="radio"
                    name={value}
                    className={`absolute w-full h-full left-0 opacity-0 cursor-pointer`}
                    value={value}
                    onChange={() => {
                      setValue(value)
                      setIsSelectOpen(false);
                    }}
                  />
                  <label
                    className={`text-sm px-4 py-1 checked:bg-gray-200 focus:bg-gray-200 `}
                  >
                    {value}
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