import { PropsWithChildren, createContext, useContext, useState } from "react";
import { useCity } from "../hooks/useCity";
import { usePokemon } from "../hooks/usePokemon";
import { PokemonDataType } from "../types/pokemon-types";
import { CityDataType, CityType } from "../types/city-types";
import { PokemonListRegistered } from "../types/pokemon-registered-types";
import { useDate } from "../hooks/useDate";
import { useTime } from "../hooks/useTime";

type IDataContext = {
  city: string;
  listPokemonRegistered: PokemonListRegistered[];
  valueSelectedPokemon: string;
  valueSelectedCity: string;
  dateValue: string;
  cityData: CityDataType[] | undefined;
  loading: boolean;
  pokemonGenerationData: CityDataType | undefined;
  pokemonData: PokemonDataType[] | undefined;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  setValueSelectedCity: React.Dispatch<React.SetStateAction<string>>;
  setValueSelectedPokemon: React.Dispatch<React.SetStateAction<string>>;
  setDateValue: React.Dispatch<React.SetStateAction<string>>;
  setListPokemonRegistered: React.Dispatch<React.SetStateAction<PokemonListRegistered[]>>;
  dateData: string[];
  timeData: string[];
  timeValue: string;
  setTimeValue: React.Dispatch<React.SetStateAction<string>>;
}


const PokemonContext = createContext<IDataContext | null>(null);

export const useDataPokemonContext = () => {
  const context = useContext(PokemonContext);
  if (!context) throw new Error("useData precisa estar em DataContextProvider");
  return context;
};

export function PokemonContextProvider({ children }: PropsWithChildren) {
  const [city, setCity] = useState<string>("");
  const { cityData, loading, pokemonGenerationData } = useCity(city);
  const { pokemonData } = usePokemon(pokemonGenerationData?.url as string)

  const [valueSelectedPokemon, setValueSelectedPokemon] = useState("Selecione seu pokémon")
  const [valueSelectedCity, setValueSelectedCity] = useState("Selecione sua cidade");
  const [listPokemonRegistered, setListPokemonRegistered] = useState<PokemonListRegistered[]>([])

  const { dateData } = useDate();
  const [dateValue, setDateValue] = useState("Selecione uma data")

  const { timeData } = useTime(dateValue);
  const [timeValue, setTimeValue] = useState("Selecione uma data")

  return (
    <PokemonContext.Provider
      value={{city, setCity, cityData, loading, valueSelectedCity, setValueSelectedCity, pokemonData, valueSelectedPokemon, setValueSelectedPokemon, listPokemonRegistered, setListPokemonRegistered, pokemonGenerationData, dateData, dateValue, setDateValue, timeData, timeValue, setTimeValue}}
    >
      {children}
    </PokemonContext.Provider>
  )
}