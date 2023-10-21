import { CityDataType } from "./city-types";
import { PokemonListRegistered } from "./pokemon-registered-types";
import { PokemonDataType } from "./pokemon-types";

export type IValueListPokemonRegistered = {
  [key: string]: string;
}

export type IDataContextPokemon = {
  cityUrl: string;
  listPokemonRegistered: PokemonListRegistered[];
  valueSelectedPokemon: string;
  valueSelectedCity: string;
  dateValue: string;
  cityData: CityDataType[] | undefined;
  loading: boolean;
  pokemonGenerationData: CityDataType | undefined;
  pokemonData: PokemonDataType[] | undefined;
  setCityUrl: React.Dispatch<React.SetStateAction<string>>;
  setValueSelectedCity: React.Dispatch<React.SetStateAction<string>>;
  setValueSelectedPokemon: React.Dispatch<React.SetStateAction<string>>;
  setDateValue: React.Dispatch<React.SetStateAction<string>>;
  setListPokemonRegistered: React.Dispatch<React.SetStateAction<PokemonListRegistered[]>>;
  dateData: string[] | undefined;
  timeData: string[] | undefined;
  timeValue: string;
  setTimeValue: React.Dispatch<React.SetStateAction<string>>;
  valueListPokemonRegistered: IValueListPokemonRegistered
  setValueListPokemonRegistered: React.Dispatch<React.SetStateAction<IValueListPokemonRegistered>>;
}