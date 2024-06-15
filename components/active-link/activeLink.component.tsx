'use client';
import Link from "next/link";
import './activeLink.css';
import { usePathname } from "next/navigation";


interface ActiveLinkProps {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: ActiveLinkProps) => {

  const pathname = usePathname();

  return (
    <Link href={path} className={` ${(pathname == path) ? 'active_link' : 'link'} ${'main_links'}`}>
      {text}
    </Link>
  );
};
