import React from "react";
import {
  BookOpenIcon,
  BookmarkAltIcon,
  ClockIcon,
  ChartBarIcon,
  ReceiptRefundIcon,
  UserAddIcon,
  CogIcon,
} from "@heroicons/react/outline";

function Bar() {
  return (
    <div className="border-r border-neutral-200 hidden md:block w-72 h-screen">
      <div className="p-4 text-sky-600 font-semibold text-2xl uppercase">
        <h2>Fuze</h2>
      </div>
      <div className="px-3 my-3 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xs font-thin uppercase text-neutral-600">
            Algemeen
          </h3>
        </div>
        <a
          href=""
          className="flex justify-start items-center hover:text-sky-700 text-neutral-700 py-1"
        >
          <ChartBarIcon className="w-5 h-5 mx-2" />
          <span className="font-medium">Overzicht</span>
        </a>
      </div>
      <div className="px-3 my-3 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xs font-thin uppercase text-neutral-600">
            Resultaten
          </h3>
        </div>
        <a
          href=""
          className="flex justify-start items-center hover:text-sky-700 text-neutral-700 py-1"
        >
          <BookOpenIcon className="w-5 h-5 mx-2" />
          <span className="font-medium">Toetsen</span>
        </a>
        <a
          href=""
          className="flex justify-start items-center hover:text-sky-700 text-neutral-700 py-1"
        >
          <BookmarkAltIcon className="w-5 h-5 mx-2" />
          <span className="font-medium">Rapporten</span>
        </a>
        <a
          href=""
          className="flex justify-start items-center hover:text-sky-700 text-neutral-700 py-1"
        >
          <ClockIcon className="w-5 h-5 mx-2" />
          <span className="font-medium">Recent</span>
        </a>
      </div>
      <div className="px-3 my-3 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xs font-thin uppercase text-neutral-600">
            Leerlingencontact
          </h3>
        </div>
        <a
          href=""
          className="flex justify-start items-center hover:text-sky-700 text-neutral-700 py-1"
        >
          <ReceiptRefundIcon className="w-5 h-5 mx-2" />
          <span className="font-medium">Reservatie</span>
        </a>
      </div>
      <div className="px-3 my-3 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xs font-thin uppercase text-neutral-600">
            Instellingen
          </h3>
        </div>
        <a
          href=""
          className="flex justify-start items-center hover:text-sky-700 text-neutral-700 py-1"
        >
          <CogIcon className="w-5 h-5 mx-2" />
          <span className="font-medium">Mijn account</span>
        </a>
        <a
          href=""
          className="flex justify-start items-center hover:text-sky-700 text-neutral-700 py-1"
        >
          <UserAddIcon className="w-5 h-5 mx-2" />
          <span className="font-medium">Account toevoegen</span>
        </a>
      </div>
    </div>
  );
}

export default Bar;
