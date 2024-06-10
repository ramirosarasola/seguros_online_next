import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-op.webp";
import { ActiveLink } from "../active-link/activeLink.component";

const navItems = [
  { path: "/", text: "Autos" },
  { path: "/hogar", text: "Hogar" },
  { path: "/otros", text: "Otros" },
  { path: "/blog", text: "Blog" },
  { path: "/contacto", text: "Contacto" },
];

export const Navbar = () => {
  return (
    <nav className="h-24 w-full px-16 bg-secondary flex items-center justify-between">
      <Link href="/">
        <Image src={logo} alt="logo" width={100} height={100} />
      </Link>
      <div className="flex gap-8">
        {navItems.map((item) => (
          <ActiveLink key={item.path} {...item} />
        ))}
      </div>
      <div className="flex items-center gap-8">
        <i>📞</i>
        <div>
          <p>11 2222 3333</p>
          <p>11 2222 4444</p>
        </div>
      </div>
    </nav>
  );
};
