import React from "react"

type IInput = React.ComponentProps<"input"> & {
  label: string;
}

export function Input({ label, ...props}: IInput) {

  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor="" className="text-xs font-bold text-black">{label}</label>
      <input 
        type="text" 
        className="w-full text-sm text-zinc-500 font-normal py-3 px-4 bg-transparent border border-zinc-300 rounded-lg"
        {...props}
      />
    </div>
  )
}