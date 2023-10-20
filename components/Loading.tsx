
type LoadingType = {
  text: string
}

export function Loading({ text }: LoadingType) {

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-10">
      <div className="w-16 h-16 border-t-4 border-red-500 border-solid rounded-full animate-spin"></div>
      <p className="mt-4 text-xl font-semibold text-black">Loading {text}...</p>
      <div className="absolute top-0 left-0 right-0 bottom-0  bg-black opacity-30">
      </div>
    </div>
  )
}