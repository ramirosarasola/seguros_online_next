import type { Metadata } from "next";
import { CaucionQuoterForm } from "../../components/quoter-form/caucion-quoter-form.component";

export const metadata: Metadata = {
  title: "Seguros de Caución | SegurosOnline | Aseguradores de Cauciones",
  description:
    "Cotizar Seguros de Caución. Somos una compañía especializada en seguros de Caución con una trayectoria de más de 15 años.",
  openGraph: {
    title: "Seguros de Caño | SegurosOnline | Aseguradores de Cauciones",
    description:
      "Cotizar Seguros de Caño. Somos una práctica con una trayectoria de más de 15 años.",
    url: "https://www.segurosonline.com.ar/caucion",
    siteName: "SegurosOnline",
    images: [
      {
        url: "https://www.segurosonline.com.ar/contratar-seguro-caucion.jpg",
      },
    ],
    locale: "es-AR",
    type: "website",
  },
  twitter: {
    title: "Seguros de Caño | SegurosOnline | Aseguradores de Cauciones",
    description:
      "Cotizar Seguros de Caño. Somos una práctica con una trayectoria de más de 15 años.",
    images: ["https://www.segurosonline.com.ar/contratar-seguro-caucion.jpg"],
    card: "summary_large_image",
    creator: "@SegurosOnline",
  },
};

export default function CaucionPage() {
  return (
    <section className="px-4 md:px-16 justify-end flex flex-1 py-10 min-h-[calc(100vh-96px)] bg-caucion-img bg-light_primary">
      <CaucionQuoterForm />
    </section>
  );
}
