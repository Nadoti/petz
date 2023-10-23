import { Input } from "@/components/form/Input";
import { useQueryParamState } from "hooks/useQueryParamsState";


export function UserData() {
  const [nameValue, setNameValue] = useQueryParamState<string>("name", "")
  const [surnameValue, setSurnameValue] = useQueryParamState<string>("surname", "")
  
  return (
    <section className="flex flex-col sm:flex-row gap-4 mb-8">
      <Input
        label="Nome"
        name="nome"
        id="nome"
        placeholder="Digite seu nome"
        value={nameValue}
        setValue={setNameValue}
      />
      <Input 
        label="Sobrenome"
        name="sobrenome"
        id="sobrenome"
        placeholder="Digite seu Sobrenome"
        value={surnameValue}
        setValue={setSurnameValue}
      />
    </section>
  )
}