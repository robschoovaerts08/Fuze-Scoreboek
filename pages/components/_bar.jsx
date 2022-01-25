import React from "react";
import { BookOpenIcon } from "@heroicons/react/outline";

function Bar() {
  return (
    <div className="border-r border-neutral-200 hidden md:block w-72 h-screen">
      <div className="p-4 text-sky-600 font-semibold text-2xl uppercase">
        <h2>Fuze</h2>
      </div>
      <div className="px-3 my-3 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xs font-semibold uppercase text-neutral-600">
            Resultaten
          </h3>
        </div>
        <a
          href=""
          className="flex justify-start items-center hover:text-sky-700 text-neutral-700"
        >
          <BookOpenIcon className="w-5 h-5 mx-2" />
          <span className="font-medium">Toetsen</span>
        </a>
        <a
          href=""
          className="flex justify-start items-center hover:text-sky-700 text-neutral-700"
        >
          <BookOpenIcon className="w-5 h-5 mx-2" />
          <span className="font-medium">Rapporten</span>
        </a>
        <a
          href=""
          className="flex justify-start items-center hover:text-sky-700 text-neutral-700"
        >
          <BookOpenIcon className="w-5 h-5 mx-2" />
          <span className="font-medium">Recent</span>
        </a>
      </div>
      <div className="px-3 my-3 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xs font-semibold uppercase text-neutral-600">
            Leerlingencontact
          </h3>
        </div>
        <a
          href=""
          className="flex justify-start items-center hover:text-sky-700 text-neutral-700"
        >
          <BookOpenIcon className="w-5 h-5 mx-2" />
          <span className="font-medium">Reservatie</span>
        </a>
        <a
          href=""
          className="flex justify-start items-center hover:text-sky-700 text-neutral-700"
        >
          <BookOpenIcon className="w-5 h-5 mx-2" />
          <span className="font-medium">Overzicht</span>
        </a>
      </div>
      <div>
        <h3>Instellingen</h3>
        <a href="">Mijn account</a>
        <a href="">Account toevoegen</a>
      </div>
    </div>
  );
}

export default Bar;
