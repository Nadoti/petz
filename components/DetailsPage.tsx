
interface DetailsProps {
  title: string;
  text: string
}

export function DetailsPage({ title, text}: DetailsProps) {

  return (
    <section className="w-full flex flex-col gap-3 px-2 sm:px-[106px] pt-8 pb-7 sm:pb-14 bg-red-600">
      <span className="flex gap-1">
        <p className="text-xs">Home</p>
        <p className="text-xs">{">"}</p>
        <p className="text-xs">{title}</p>
      </span>
      <h2 className="text-2xl sm:text-3x2 font-bold">{title}</h2>
      <p className="text-sm">{text}</p>
    </section>
  )
}