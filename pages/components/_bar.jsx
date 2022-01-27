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
import Image from "next/image";

function Bar() {
  return (
    <div className="border-r border-neutral-200 hidden md:block w-72 h-screen">
      <div className="p-4 text-cyan-600 font-semibold text-2xl uppercase flex justify-center items-center">
        <Image src="/assets/logo.jpg" alt="Logo" width="50" height="50" />
        <h2>Fuze</h2>
      </div>
      <div className="my-3 flex flex-col">
        <div className="mb-4 mx-2">
          <h3 className="text-xs font-thin uppercase text-neutral-600">
            Algemeen
          </h3>
        </div>
        <a
          href="#"
          className="flex justify-start items-center hover:text-sky-700 hover:bg-neutral-50 border-l-[3px] border-l-transparent hover:border-l-sky-600 text-neutral-700 py-1.5"
        >
          <ChartBarIcon className="w-5 h-5 mx-2" />
          <span className="font-medium">Overzicht</span>
        </a>
      </div>
      <div className="my-3 flex flex-col">
        <div className="mb-4 mx-2">
          <h3 className="text-xs font-thin uppercase text-neutral-600">
            Resultaten
          </h3>
        </div>
        <a
          href=""
          className="flex justify-start items-center hover:text-sky-700 hover:bg-neutral-50 border-l-[3px] border-l-transparent hover:border-l-sky-600 text-neutral-700 py-1.5"
        >
          <ClockIcon className="w-5 h-5 mx-2" />
          <span className="font-medium">Recent</span>
        </a>
        <a
          href=""
          className="flex justify-start items-center hover:text-sky-700 hover:bg-neutral-50 border-l-[3px] border-l-transparent hover:border-l-sky-600 text-neutral-700 py-1.5"
        >
          <BookOpenIcon className="w-5 h-5 mx-2" />
          <span className="font-medium">Toetsen</span>
        </a>
        <a
          href=""
          className="flex justify-start items-center hover:text-sky-700 hover:bg-neutral-50 border-l-[3px] border-l-transparent hover:border-l-sky-600 text-neutral-700 py-1.5"
        >
          <BookmarkAltIcon className="w-5 h-5 mx-2" />
          <span className="font-medium">Rapporten</span>
        </a>
      </div>
      <div className="my-3 flex flex-col">
        <div className="mb-4 mx-2">
          <h3 className="text-xs font-thin uppercase text-neutral-600">
            Leerlingencontact
          </h3>
        </div>
        <a
          href=""
          className="flex justify-start items-center hover:text-sky-700 hover:bg-neutral-50 border-l-[3px] border-l-transparent hover:border-l-sky-600 text-neutral-700 py-1.5"
        >
          <ReceiptRefundIcon className="w-5 h-5 mx-2" />
          <span className="font-medium">Reservatie</span>
        </a>
      </div>
      <div className="my-3 flex flex-col">
        <div className="mb-4 mx-2">
          <h3 className="text-xs font-thin uppercase text-neutral-600">
            Instellingen
          </h3>
        </div>
        <a
          href=""
          className="flex justify-start items-center hover:text-sky-700 hover:bg-neutral-50 border-l-[3px] border-l-transparent hover:border-l-sky-600 text-neutral-700 py-1.5"
        >
          <CogIcon className="w-5 h-5 mx-2" />
          <span className="font-medium">Mijn account</span>
        </a>
        <a
          href=""
          className="flex justify-start items-center hover:text-sky-700 hover:bg-neutral-50 border-l-[3px] border-l-transparent hover:border-l-sky-600 text-neutral-700 py-1.5"
        >
          <UserAddIcon className="w-5 h-5 mx-2" />
          <span className="font-medium">Account toevoegen</span>
        </a>
      </div>
    </div>
  );
}

export default Bar;
