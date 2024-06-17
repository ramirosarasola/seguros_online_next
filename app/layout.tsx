import { Footer } from "@/components";
import ServerNavbar from "@/components/navbar/server-navbar.component";
import type { Metadata } from "next";
import { Poppins, Varela_Round } from "next/font/google";
// import { Inter } from "next/font/google";
import "./globals.css";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const varelaRound = Varela_Round({
  subsets: ["latin"],
  weight: ["400"],
});

// const inter = Inter({ subsets: ["latin"] });

const baseUrl = "https://www.segurosonline.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  keywords:["Seguros de Autos", "Seguros Online", "Cotización", "Cotización de Seguros"],
  title: {
    default: "Seguros Para Autos | SegurosOnline | Mejoramos cualquier Presupuesto",
    template: "%s | SegurosOnline",  
  },
  openGraph: {
    description: "Cotizá seguros para autos online. Mejorá tu póliza actual ahorrando hasta un 30% sin perder beneficios. Trabajamos con todas las aseguradoras, Cotizá Ya!",
    // images: [
      
    // ]
    
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} min-h-screen bg-secondary`}>
      <header className="bg-secondary">
        <ServerNavbar />
      </header>
      <main
        className={`pt-[96px] flex flex-col justify-between min-h-[calc(100vh-18rem)] ${poppins.className} mx-auto`}
      >
        {children}
      </main>
        <Footer/>
      </body>
    </html>
  );
}
