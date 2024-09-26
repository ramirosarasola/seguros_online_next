"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect } from "react";
interface NavItem {
  path: string;
  text: string;
}

interface ClientNavbarProps {
  navItems: NavItem[];
}

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
            className="md:hidden flex flex-col justify-between h-full"
            style={{ height: "calc(100vh - 96px)" }}
          >
            <div className="flex flex-col justify-center px-2 h-full gap-6">
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
