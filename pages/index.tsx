import Head from 'next/head'

export default function Home() {
  return (
    <main className="min-h-screen-bg-image bg-pokemon bg-cover w-full max-w-full relative">
      <Head>
        <title>Home</title>
      </Head>
      <div className="w-full max-w-full absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
        <h1 className="text-white text-2xl sm:text-3x2 font-bold text-center">
          Cuidamos bem do seu pokémon,<br />para ele cuidar bem de você
        </h1>
      </div>
    </main>
  )
}
