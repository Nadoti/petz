import { BsPlus } from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid';
import { useDataPokemonContext } from "context/PokemonContext";
import { SelectPokemon } from "../form/SelectPokemon";
import { errorNotification, notification } from "utils/notification";


export function RegisterTeam() {
  const { listPokemonRegistered, setListPokemonRegistered, cityUrl, valueListPokemonRegistered, setValueListPokemonRegistered } = useDataPokemonContext()
  
  function registerNewPokemon() {
    if(listPokemonRegistered.length === 6) {
      notification({type: errorNotification, message: "O Registro não pode ultrapassar 6 pokémons"})
      return;
    }
    if(!cityUrl) {
      notification({type: errorNotification, message: "Escolha a região onde ocorrerá o atendimento"})
      return;
    }
    const id = uuidv4()
    
    setListPokemonRegistered((prevValue) => [
      ...prevValue,
      { id: id },
    ]);

    setValueListPokemonRegistered((prevValue) => ({
      ...prevValue,
      [id]: "Selecione seu pokémon",
    }));
  }

  function RemovePokemon(id: string) {
    const removePokemonList = listPokemonRegistered.filter(data => data.id !== id)
    const newObj = { ...valueListPokemonRegistered };
    delete newObj[id];
    setValueListPokemonRegistered(newObj);
    setListPokemonRegistered(removePokemonList)
  }
  return (
    <section>
      <div className="flex flex-col gap-2 mb-4">
        <h1 className="text-xs font-bold text-black">Cadastreu seu time</h1>
        <p className="text-xs text-zinc-500">Atendemos até 06 pokémons por vez</p>
      </div>
      <div>
        {listPokemonRegistered?.map((dataPokemon, index) => (
          <div key={dataPokemon.id} className="flex items-center mb-8">
            <span className="text-xs text-black font-bold min-w-max mr-9">Pokemon 0{index+1}</span>
            <SelectPokemon name={dataPokemon.id} value={valueListPokemonRegistered[dataPokemon.id]} setValue={setValueListPokemonRegistered}/>
            <button
              onClick={() => RemovePokemon(dataPokemon.id)}
              type="button"
              className="bg-red-400 px-3 p-1 rounded-3xl text-sm ml-4 transition-all hover:scale-125"
            >
              X
            </button>
          </div>
        ))}
      </div>
      <div className="mb-8">
        <button
          onClick={registerNewPokemon}
          className="border border-black bg-transparent flex items-center gap-3 text-black rounded-3xl py-2 px-4 font-bold text-xs transition-all hover:bg-black hover:text-white hover:scale-110"
          type="button"
        >
          Adicionar novo pokémon ao time...
          <BsPlus size={20} />
        </button>
      </div>
    </section>
  )
}