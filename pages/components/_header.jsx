import Head from "next/head";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <Head>
        <title>Fuze Scoreboek</title>
        <meta name="description" content="Fuze online scoreboek" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <header className="py-5 bg-neutral-50 border-b border-b-neutral-100">
          <nav className="text-stone-600 md:w-1/2 mx-auto flex justify-between items-center">
            <h2 className="font-normal text-neutral-600 uppercase text-2xl">Fuze</h2>
            <div className="space-x-8 text-md font-semibold">
              <a href="#" className="hover:text-stone-700">
                Resultaten
              </a>
              <a href="#" className="hover:text-stone-700">
                Leerlingcontact
              </a>
              <a href="#" className="hover:text-stone-700">
                Gegevens
              </a>
            </div>
            <button className="px-3 py-2 bg-sky-600 border-transparent hover:text-sky-600 border hover:border-sky-600 hover:bg-neutral-50 transition ease-in-out duration-200 rounded-lg text-white font-semibold text-sm">
              Uitloggen
            </button>
          </nav>
        </header>
      </body>
    </>
  );
}
