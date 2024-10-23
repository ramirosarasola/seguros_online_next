"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface NavItem {
  path: string;
  text: string;
}

interface ClientNavbarProps {
  navItems: NavItem[];
}

interface Aseguradora {
  id: number;
  name: string;
  path: string;
}
const aseguradoras: Aseguradora[] = [
  {
    id: 1,
    name: "Allianz",
    path: "/aseguradoras/allianz",
  },
  {
    id: 2,
    name: "ATM",
    path: "/aseguradoras/atm",
  },
  {
    id: 3,
    name: "BBVA",
    path: "/aseguradoras/bbva",
  },
  {
    id: 4,
    name: "Federación Patronal",
    path: "/aseguradoras/federacion-patronal",
  },
  {
    id: 5,
    name: "La Mercantil",
    path: "/aseguradoras/la-mercantil",
  },
  {
    id: 6,
    name: "Orbis",
    path: "/aseguradoras/orbis",
  },
  {
    id: 7,
    name: "Rio Uruguay",
    path: "/aseguradoras/rio-uruguay",
  },
  {
    id: 8,
    name: "San Cristobal",
    path: "/aseguradoras/san-cristobal",
  },
  {
    id: 9,
    name: "Sancor",
    path: "/aseguradoras/sancor",
  },
  {
    id: 10,
    name: "Seguros Rivadavia",
    path: "/aseguradoras/seguros-rivadavia",
  },
  {
    id: 11,
    name: "SMG",
    path: "/aseguradoras/smg",
  },
  {
    id: 12,
    name: "Zurich",
    path: "/aseguradoras/zurich",
  },
];

export default function ClientNavbar({ navItems }: ClientNavbarProps) {
  return (
    <Disclosure
      as="div"
      className="md:hidden bg-primary fixed top-[6rem] left-0 w-full z-50"
    >
      {({ open }) => (
        <>
          <DisclosureButton
            name="navbar-button"
            aria-label="navbar-button"
            className="hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white absolute top-[-4rem] right-[1rem] text-primary "
          >
            {open ? (
              <XMarkIcon
                className="block h-8 w-8"
                color="#1570B1"
                aria-hidden="true"
              />
            ) : (
              <Bars3Icon
                className="block h-8 w-8"
                color="#1570B1"
                aria-hidden="true"
              />
            )}
          </DisclosureButton>
          <DisclosurePanel
            className="md:hidden flex flex-col justify-between h-full overflow-y-auto"
            style={{ height: "calc(100vh - 96px)" }}
          >
            <div className="flex flex-col justify-start px-2 h-fit gap-2">
              {navItems.map((item) => (
                <DisclosureButton
                  key={item.path}
                  as={Link}
                  href={item.path}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white"
                >
                  {item.text}
                </DisclosureButton>
              ))}

              {/* Dropdown for Aseguradoras */}
              <Disclosure as="div" className="relative">
                {({ open }) => (
                  <>
                    <DisclosureButton className="block rounded-md px-3 py-2 text-base font-medium text-white">
                      Aseguradoras
                    </DisclosureButton>
                    <DisclosurePanel
                      className={`${
                        open ? "block" : "hidden"
                      } mt-2 w-full bg-primary rounded-md z-10 overflow-y-auto scrollbar-hide`}
                    >
                      {aseguradoras.length > 0 ? (
                        <ul className="list-disc">
                          {aseguradoras.map((aseguradora) => (
                            <li
                              className="pl-6 flex items-center justify-start"
                              key={aseguradora.id}
                            >
                              <span className="text-white">- </span>
                              <a
                                key={aseguradora.id}
                                href={aseguradora.path}
                                className="block px-4 py-2 text-white hover:bg-[#1570B1]/20 hover:text-white"
                              >
                                {aseguradora.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="px-4 py-2 text-gray-500">Cargando...</p>
                      )}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="">
                  <p className="text-secondary">0810 345 9000</p>
                  <p className="text-secondary">(011) 5199-8100</p>
                </div>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
