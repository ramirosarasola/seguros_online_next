import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-op.webp";
import { ActiveLink } from "../active-link/activeLink.component";
import ClientNavbar from "./client-navbar.component";
import phone from "../../assets/contact_phone.svg";
import Dropdown from "./dropdown-navbar.component";

const navItems = [
  { path: "/", text: "Autos" },
  { path: "/seguros-para-hogar", text: "Hogar" },
  { path: "/otros", text: "Otros" },
  { path: "/blog", text: "Blog" },
  { path: "/contacto", text: "Contacto" },
];

const otrosDropdownItems = [
  { path: "/seguros-para-bici", text: "Bici" },
  { path: "/seguros-de-caucion", text: "Caucion" },
  { path: "/seguros-de-art", text: "ART" },
  { path: "/seguros-para-comercio", text: "Comercio" },
  { path: "/garantia-de-alquiler", text: "Garantia de Alquiler" },
];

const clientNavItems = [
  { path: "/", text: "Autos" },
  { path: "/seguros-para-hogar", text: "Hogar" },
  { path: "/seguros-para-bici", text: "Bici" },
  { path: "/seguros-de-caucion", text: "Caucion" },
  { path: "/seguros-de-art", text: "ART" },
  { path: "/seguros-para-comercio", text: "Comercio" },
  { path: "/garantia-de-alquiler", text: "Garantia de Alquiler" },
  { path: "/blog", text: "Blog" },
  { path: "/contacto", text: "Contacto" },
];

export default function ServerNavbar() {
  return (
    <nav className="fixed h-24 w-full px-4 md:px-16 md:bg-secondary md:main_text flex items-center justify-between z-50 bg-white nav_shadow ">
      <div className="h-24 w-full md:bg-secondary md:main_text flex items-center justify-between max-w-[1200px] mx-auto">
        <a href="/">
          <Image
            src={logo}
            priority={true}
            alt="seguros online logo"
            width={120}
            className="h-auto"
          />
        </a>
        <div className="hidden w-[60%] md:flex gap-8">
          {navItems.map((item) =>
            item.text === "Otros" ? (
              <Dropdown
                key={item.path}
                text={item.text}
                options={otrosDropdownItems}
              />
            ) : (
              <ActiveLink key={item.path} {...item} />
            )
          )}
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Image
            height={35}
            width={35}
            src={phone}
            alt="telefono"
            className="h-auto"
            loading="lazy"
          />
          <div>
            <p>0810 345 9000</p>
            <p>(011) 5199-8100</p>
          </div>
        </div>
        <ClientNavbar navItems={clientNavItems} />
      </div>
    </nav>
  );
}
