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
import { motion } from "framer-motion";

function Bar() {
  return (
    <div className="border-r border-neutral-200 hidden md:block w-72 h-screen ">
      <div className="p-4 text-cyan-600 font-semibold text-2xl uppercase flex justify-center items-center">
        <a href="/" className="flex items-center justify-center hover:scale-103 duration-500">
        <Image className="" src="/assets/logo.jpg" alt="Logo" width="50" height="50" />
        <h2>Fuze</h2>
        </a>
      </div>
      <div className="my-3 flex flex-col">
        <div className="mb-4 mx-2">
          <h3 className="text-xs font-thin uppercase text-neutral-600">
            Algemeen
          </h3>
        </div>
        <a
          href="#"
          className="transition duration-100 flex justify-start items-center hover:text-sky-700 hover:bg-neutral-50 border-l-[3px] border-l-transparent hover:border-l-sky-600 text-neutral-700"
        >
          <ChartBarIcon className="w-5 h-5 mx-2" />
          <span className="transition duration-150 py-5 flex items-center hover:translate-x-1.5 h-6 w-80 font-medium">Overzicht</span>
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
          className="transition duration-100 flex justify-start items-center hover:text-sky-700 hover:bg-neutral-50 border-l-[3px] border-l-transparent hover:border-l-sky-600 text-neutral-700"
        >
          <ClockIcon className="w-5 h-5 mx-2" />
          <span className="transition duration-150 hover:translate-x-1.5 h-6 w-80 flex items-center py-5 font-medium">Recent</span>
        </a>
        <a
          href=""
          className="transition duration-100 flex justify-start items-center hover:text-sky-700 hover:bg-neutral-50 border-l-[3px] border-l-transparent hover:border-l-sky-600 text-neutral-700"
        >
          <BookOpenIcon className="w-5 h-5 mx-2" />
          <span className="flex items-center py-5 transition duration-150 hover:translate-x-1.5 h-6 w-80 font-medium">Toetsen</span>
        </a>
        <a
          href=""
          className="transition duration-100 flex justify-start items-center hover:text-sky-700 hover:bg-neutral-50 border-l-[3px] border-l-transparent hover:border-l-sky-600 text-neutral-700"
        >
          <BookmarkAltIcon className="w-5 h-5 mx-2" />
          <span className="transition flex items-center py-5 duration-150 hover:translate-x-1.5 h-6 w-80 font-medium">Rapporten</span>
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
          className="transition duration-100 flex justify-start items-center hover:text-sky-700 hover:bg-neutral-50 border-l-[3px] border-l-transparent hover:border-l-sky-600 text-neutral-700"
        >
          <ReceiptRefundIcon className="w-5 h-5 mx-2" />
          <span className="transition flex items-center py-5 duration-150 hover:translate-x-1.5 h-6 w-80 font-medium">Reservatie</span>
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
          className=" transition duration-100 flex justify-start items-center hover:text-sky-700 hover:bg-neutral-50 border-l-[3px] border-l-transparent hover:border-l-sky-600 text-neutral-700"
        >
          <CogIcon className="w-5 h-5 mx-2" />
          <span className="transition flex items-center py-5 duration-150 hover:translate-x-1.5 h-6 w-80 font-medium">Mijn account</span>
        </a>
        <a
          href=""
          className="transition duration-100   flex justify-start items-center hover:text-sky-700 hover:bg-neutral-50 border-l-[3px] border-l-transparent hover:border-l-sky-600 text-neutral-700 py-1.5"
        >
          <UserAddIcon className="w-5 h-5 mx-2" />
          <span className="transition flex items-center py-5 duration-150 hover:translate-x-1.5 h-6 w-80 font-medium ">Account toevoegen</span>
        </a>
      </div>
    </div>
  );
}

export default Bar;
