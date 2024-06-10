import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

export const metadata: Metadata = {
  title: "Seguros Online | Admin",
  description: "Admin generated with love by Ramiro 💖",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className={`admin_layout`}>{children}</main>
    </>
  );
}
