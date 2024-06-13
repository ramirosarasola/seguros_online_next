import Link from "next/link";
import s from "../active-link/activeLink.module.css";

interface DropdownProps {
  text: string;
  options: { path: string; text: string }[];
}

const Dropdown = ({ text, options }: DropdownProps) => {
  return (
    <div
      className={`relative ${s.link} h-[46px] overflow-hidden hover:overflow-visible`}
    >
      <button className="text-black">{text}</button>
      <div className="flex w-full h-6"></div>
      <div
        className={`absolute z-30 left-0 w-48 bg-white border border-gray-200 rounded shadow-lg`}
      >
        {options.map((option) => (
          <Link
            key={option.path}
            href={option.path}
            className="block px-4 py-2 hover:bg-gray-100"
          >
            {option.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
