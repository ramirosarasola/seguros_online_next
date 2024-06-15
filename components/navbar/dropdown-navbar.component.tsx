'use client';
import Link from "next/link";
import "../active-link/activeLink.css";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

interface DropdownProps {
  text: string;
  options: { path: string; text: string }[];
}

const Dropdown = ({ text, options }: DropdownProps) => {

  const path = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    switch(path) {
      case '/bici':
        setIsActive(true);
        break;
      case '/caucion':
        setIsActive(true);
        break;
      case '/art':
        setIsActive(true);
        break;
      case '/comercio':
        setIsActive(true);
        break;
      case '/garantias':
        setIsActive(true);
        break;
      default:
        setIsActive(false);
        break;
    }
  }, [path])

  return (
    <div
      className={`relative ${"link"} h-[46px] ${isActive ? "active_otros" : ''} overflow-hidden hover:overflow-visible hover:text-white`}
    >
      <button className="mt-[2px]">{text}</button>
      <div className="flex w-full h-6"></div>
      <div
        className={`absolute z-30 left-0 w-48 bg-white border border-gray-200 rounded shadow-lg`}
      >
        {options.map((option) => (
          <Link
            key={option.path}
            href={option.path}
            className="block px-4 py-2 hover:bg-gray-100 text-main_text"
          >
            {option.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
