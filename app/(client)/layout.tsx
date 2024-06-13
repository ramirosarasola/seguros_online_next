import type { Metadata } from "next";
import { Poppins, Varela_Round } from "next/font/google";
import "../globals.css";
import { Footer } from "@/components/footer/footer.component";
import ServerNavbar from "@/components/navbar/server-navbar.component";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const varelaRound = Varela_Round({
  subsets: ["latin"],
  weight: ["400"],
});

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
        <ServerNavbar />
      </header>
      <main
        className={` flex flex-col justify-between min-h-[calc(100vh-18rem)] ${varelaRound.className} mx-auto`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
