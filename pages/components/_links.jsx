import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  ChevronDownIcon,
  CubeIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";

const callsToAction = [
  { name: "Fuze Home", href: "#", icon: HomeIcon },
  { name: "FAQ", href: "#", icon: QuestionMarkCircleIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Links() {
  return (
    <Popover className="relative bg-white">
      <div className="mx-auto sm:px-4">
        <div className="flex justify-between items-center">
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900"
                    )}
                  >
                    <span>Links</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          <a
                            href="https://campussintursula.smartschool.be/"
                            target="_blank"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <Image
                              src="/assets/smartschool-blue.png"
                              alt="Smartschool"
                              width="42"
                              height="42"
                            />
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Smartschool
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                Klik hier om naar de Smartschool homepagina te
                                navigeren
                              </p>
                            </div>
                          </a>
                          <a
                            href="https://www.pelckmansportaal.be/#/aanmelden"
                            target="_blank"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <Image
                              src="/assets/portaal-logo.png"
                              alt="Pelckmans Portaal"
                              width="42"
                              height="32"
                            />
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Pelckmans Portaal
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                Digitale onderwijsplatform voor secundair
                                onderwijs van uitgeverij Pelckmans
                              </p>
                            </div>
                          </a>
                          <a
                            href="https://www.diddit.be/"
                            target="_blank"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <Image
                              src="/assets/diddit.png"
                              alt="Diddit"
                              width="42"
                              height="42"
                            />
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Diddit
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                Diddit online leerplatform voor leerlingen en
                                leerkrachten
                              </p>
                            </div>
                          </a>
                          <a
                            target="_blank"
                            href="https://www.polpo.be/leerling/identificatie/start"
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <Image
                              src="/assets/polpo.png"
                              alt="Polpo"
                              width="42"
                              height="42"
                            />
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Polpo
                              </p>
                              <p className="mt-1 text-sm text-gray-500">
                                Interactieve leerplatform voor digitale
                                lesmateriaal
                              </p>
                            </div>
                          </a>
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
        </div>
      </div>
    </Popover>
  );
}
