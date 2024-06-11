import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../globals.css';
import { Footer } from "@/components/footer/footer.component";
import ServerNavbar from "@/components/navbar/server-navbar.component";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ramiro's Home Page",
  description: "Generated with love by Vercel.",
};

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <ServerNavbar/>
      </header>
      <main className={`flex flex-col justify-between min-h-[calc(100vh-18rem)] ${inter.className} px-4 md:px-16 mx-auto`}>
        <h1>Seguros Online</h1>
        {children}
      </main>
      <Footer/>
    </>
  );
}
