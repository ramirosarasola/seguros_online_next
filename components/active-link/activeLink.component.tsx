'use client';
import Link from "next/link";
import  s  from './activeLink.module.css';
import { usePathname } from "next/navigation";


interface ActiveLinkProps {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: ActiveLinkProps) => {

  const pathname = usePathname();

  return (
    <Link href={path} className={`${s.link} ${(pathname == path) && s['active-link']}`}>
      {text}
    </Link>
  );
};
