import { PropsWithChildren, createContext, useContext, useState } from "react";
import { useCity } from "../hooks/useCity";
import { usePokemon } from "../hooks/usePokemon";
import { PokemonListRegistered } from "../types/pokemon-registered-types";
import { useDate } from "../hooks/useDate";
import { useTime } from "../hooks/useTime";
import { IDataContextPokemon, IValueListPokemonRegistered } from "types/context-pokemon-types";

const PokemonContext = createContext<IDataContextPokemon | null>(null);

export const useDataPokemonContext = () => {
  const context = useContext(PokemonContext);
  if (!context) throw new Error("useData precisa estar em DataContextProvider");
  return context;
};

export function PokemonContextProvider({ children }: PropsWithChildren) {
  const [cityUrl, setCityUrl] = useState<string>("");
  const { cityData, loading, pokemonGenerationData } = useCity(cityUrl);
  const [valueSelectedCity, setValueSelectedCity] = useState("Selecione sua cidade");

  const { pokemonData } = usePokemon(pokemonGenerationData?.url as string)
  const [valueSelectedPokemon, setValueSelectedPokemon] = useState("Selecione seu pokémon")
  const [listPokemonRegistered, setListPokemonRegistered] = useState<PokemonListRegistered[]>([])

  const [ valueListPokemonRegistered, setValueListPokemonRegistered] = useState<IValueListPokemonRegistered>({})

  const { dateData } = useDate();
  const [dateValue, setDateValue] = useState("Selecione uma data")

  const { timeData } = useTime(dateValue);
  const [timeValue, setTimeValue] = useState("Selecione uma data")
  
  return (
    <PokemonContext.Provider
      value={{
        cityUrl, 
        setCityUrl, 
        cityData, 
        loading, 
        valueSelectedCity, 
        setValueSelectedCity, 
        pokemonData, 
        valueSelectedPokemon, 
        setValueSelectedPokemon, 
        listPokemonRegistered, 
        setListPokemonRegistered, 
        pokemonGenerationData, 
        dateData, 
        dateValue, 
        setDateValue, 
        timeData, 
        timeValue, 
        setTimeValue,
        valueListPokemonRegistered,
        setValueListPokemonRegistered
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}
