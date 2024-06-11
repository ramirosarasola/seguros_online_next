'use client';
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
interface NavItem {
  path: string;
  text: string;
}

interface ClientNavbarProps {
  navItems: NavItem[];
}

export default function ClientNavbar({ navItems }: ClientNavbarProps) {
  return (
    <Disclosure as="div" className="md:hidden bg-primary absolute top-[6rem] left-0 w-full">
      {({ open }) => (
        <>
          <DisclosureButton className="text-seconday hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white absolute top-[-4rem] right-[1rem] text-primary ">
            {open ? (
              <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
            ) : (
              <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
            )}
          </DisclosureButton>
          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navItems.map((item) => (
                <DisclosureButton
                  key={item.path}
                  as={Link}
                  href={item.path}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700"
                >
                  {item.text}
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5 text-secondary">
                <i>📞</i>
                <div className="ml-3">
                  <p>11 2222 3333</p>
                  <p>11 2222 4444</p>
                </div>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}