import { useDataPokemonContext } from "../../context/PokemonContext"
import { calculateCostTotal, valuePerPokemon } from "../../utils/calculate-cost-total"
import { calculateSubtotal } from "../../utils/calculate-subtotal"
import { convertToCurrency } from "../../utils/convert-to-currency"
import { managementFee } from "../../utils/management-fee"
import { pokemonGeneration } from "../../utils/pokemon-generation"


export function SchedulingPrice() {
  const { listPokemonRegistered, pokemonGenerationData } = useDataPokemonContext()
  const unitaryValue = convertToCurrency(valuePerPokemon)
  const subTotal = calculateSubtotal(listPokemonRegistered.length)
  const fee = convertToCurrency(managementFee(pokemonGenerationData?.name ? pokemonGeneration[pokemonGenerationData?.name] : 0))
  const costTotal = convertToCurrency(calculateCostTotal(listPokemonRegistered.length, pokemonGenerationData?.name ? pokemonGeneration[pokemonGenerationData?.name] : 0))
  
  
  return (
    <section className="w-full flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-500">Número de pokémons a serem atendidos:</p>
        <span className="text-sm text-zinc-500">0{listPokemonRegistered.length}</span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-500">Atendimento unitário por pokémon:</p>
        <span className="text-sm text-zinc-500">{unitaryValue}</span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-500">Subtotal:</p>
        <span className="text-sm text-zinc-500">{subTotal}</span>
      </div>
      <div className="mb-10">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-zinc-500">Taxa geracional*:</p>
          <span className="text-sm text-zinc-500">{fee}</span>
        </div>
        <p className="text-[8px] text-zinc-500">*adicionamos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%</p>
      </div>

      <div className="w-full flex items-center justify-between">
        <p className="text-black text-2xl font-bold">Valor Total: {costTotal}</p>
        <button
          type="button"
          className="border-2 border-red-600 bg-red-600 text-white rounded-3xl py-2 px-4 font-bold text-sm transition-all hover:bg-transparent hover:text-red-600 hover:scale-110"
        >
          Concluir Agendamento
        </button>
      </div>
    </section>
  )
}