import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-op.webp";
import { ActiveLink } from "../active-link/activeLink.component";
import ClientNavbar from "./client-navbar.component";
import phone from '../../assets/contact_phone.svg';
import Dropdown from "./dropdown-navbar.component";

const navItems = [
  { path: "/", text: "Autos" },
  { path: "/hogar", text: "Hogar" },
  { path: "/otros", text: "Otros" },
  { path: "/blog", text: "Blog" },
  { path: "/contacto", text: "Contacto" },
];

const otrosDropdownItems = [
  { path: "/bici", text: "Bici" },
  { path: "/caucion", text: "Caucion" },
  { path: "/art", text: "ART" },
  { path: "/comercio", text: "Comercio" },
  { path: "/garantias", text: "Garantia de Alquiler" },
];

export default function ServerNavbar() {
  return (
    <nav className="h-24 w-full px-4 md:px-16 md:bg-secondary md:text-black flex items-center justify-between">
      <Link href="/">
        <Image src={logo} alt="logo" width={120} className="h-auto" />
      </Link>
      <div className="hidden w-[60%] md:flex gap-8">
        {navItems.map((item) => (
          item.text === "Otros" ? (
            <Dropdown key={item.path} text={item.text} options={otrosDropdownItems} />
          ) : (
            <ActiveLink key={item.path} {...item} />
          )
        ))}
      </div>
      <div className="hidden md:flex items-center gap-8">
        <Image height={35} width={35} src={phone} alt="phone" className="h-auto" loading="lazy"/>
        <div>
          <p>0810 345 9000</p>
          <p>(011) 5199-8100</p>
        </div>
      </div>
      <ClientNavbar navItems={navItems} />
    </nav>
  );
}