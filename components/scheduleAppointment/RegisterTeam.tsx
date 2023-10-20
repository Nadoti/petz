import { BsPlus } from "react-icons/bs";
import { useEffect, useState} from "react"
import { v4 as uuidv4 } from 'uuid';
import { useDataPokemonContext } from "../../context/PokemonContext";
import { SelectPokemon } from "../form/SelectPokemon";



export function RegisterTeam() {
  const { listPokemonRegistered, setListPokemonRegistered } = useDataPokemonContext()

  function registerNewPokemon() {
    if(listPokemonRegistered.length === 6) {
      alert("O Maximo de Pokemon é 6")
      return;
    }
    const newPokemonInList = [
      ...listPokemonRegistered,
      {
        id: uuidv4(),
      }
    ]
    setListPokemonRegistered(newPokemonInList)
  }

  function RemovePokemon(id: string) {
    const removePokemonList = listPokemonRegistered.filter(data => data.id !== id)
    setListPokemonRegistered(removePokemonList)
  }

  return (
    <section>
      <div className="flex flex-col gap-2 mb-4">
        <h4 className="text-xs font-bold text-black">Cadastreu seu time</h4>
        <p className="text-xs text-zinc-500">Atendemos até 06 pokémons por vez</p>
      </div>
      <div>
        {listPokemonRegistered?.map((dataPokemon, index) => (
          <div key={dataPokemon.id} className="flex items-center mb-8">
            <span className="text-xs text-black font-bold min-w-max mr-9">Pokemon 0{index+1}</span>
            <SelectPokemon />
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
      {/* <span className="flex gap-4">
        <Select 
          states={states}
          region="Data para Atendimento"
        />
        <Select 
          states={states}
          region="Horário de Atendimento"
        />
      </span> */}
    </section>
  )
}