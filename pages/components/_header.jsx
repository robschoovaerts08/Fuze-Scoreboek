import Head from "next/head";
import Image from "next/image";
import {
  SearchIcon,
  UserIcon,
  LogoutIcon,
  CubeIcon,
} from "@heroicons/react/outline";

export default function Header() {
  return (
    <>
      <Head>
        <title>Fuze Scoreboek</title>
        <meta name="description" content="Fuze online scoreboek" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Graduate&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="px-5 py-3 bg-white border-b border-neutral-200">
        <nav className="text-stone-600 flex justify-between items-center">
          <div class="relative text-gray-600 focus-within:text-gray-400 rounded-3xl border border-transparent focus-within:border-sky-600">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                class="p-1 focus:outline-none focus:shadow-outline"
              >
                <SearchIcon className="w-5 h-5" />
              </button>
            </span>
            <input
              type="search"
              name="q"
              class="py-2 appearance-none text-xs font-medium text-stone-700 bg-neutral-100 rounded-3xl px-10 focus:outline-none border border-neutral-200"
              placeholder="Zoeken..."
              autocomplete="off"
            />
          </div>
          <div className="flex justify-center items-center space-x-3">
            <button className="flex items-center justify-center">
              <Image
                src="/assets/united-states.png"
                width="28"
                height="28"
                alt="lang"
              />
            </button>
            <button className="p-2 border-transparent border hover:border-neutral-200 text-white font-semibold text-sm hover:bg-neutral-200 rounded-full">
              <CubeIcon className="w-5 h-5 text-neutral-600" />
            </button>
            <button className="p-2 bg-neutral-100 border-transparent border border-neutral-300 rounded-full text-white font-semibold text-sm">
              <UserIcon className="w-5 h-5 text-neutral-400" />
            </button>
            <button className="px-3 py-2 bg-sky-600 border-transparent hover:text-sky-600 border hover:border-sky-600 hover:bg-neutral-50 transition ease-in-out duration-200 rounded-lg text-white font-semibold text-sm flex justify-between items-center">
              <LogoutIcon className="w-5 h-5 mr-2" />
              Uitloggen
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
