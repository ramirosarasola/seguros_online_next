import { Metadata } from "next";
import { AlquilerQuoterForm } from "../../components/quoter-form/alquiler-quoter-form.component";
import { quotesData } from "../../components/quotes-info/data";
import { QuoteInfo } from "../../components/quotes-info/quote-info.component";

export const metadata: Metadata = {
  title: "Tu Garantía | SegurosOnline | Seguros de Caución de Alquileres",
  description:
    "Seguro de Caución para Alquilar. El respaldo que necesitás para mudarte. Contratá el Seguro de Caución fácil, rápido y al mejor Precio.",
  openGraph: {
    title: "Tu Garantía | SegurosOnline | Seguros de Caño de Alquileres",
    description:
      "Seguro de Caño para Alquilar. El respaldo que necesitás para mudarte. Contratá el Seguro de Caño más barato, más seguro y al mejor Precio.",
    url: "https://www.segurosonline.com.ar/garantia",
    siteName: "SegurosOnline",
    images: [
      {
        url: "https://www.segurosonline.com.ar/seguro-de-caucion-para-alquileres.jpg",
      },
    ],
    locale: "es-AR",
    type: "website",
  },
  twitter: {
    title: "Tu Garantía | SegurosOnline | Seguros de Caño de Alquileres",
    description:
      "Seguro de Caño para Alquilar. El respaldo que necesitás para mudarte. Contratá el Seguro de Caño más barato, más seguro y al mejor Precio.",
    images: [
      "https://www.segurosonline.com.ar/seguro-de-caucion-para-alquileres.jpg",
    ],
    card: "summary_large_image",
    creator: "@SegurosOnline",
  },
};

export default function GarantiasPage() {
  return (
    <>
      <section className="px-4 md:px-16 justify-end flex flex-1 py-10 min-h-[calc(100vh-96px)] bg-garantia-img bg-light_primary">
        <AlquilerQuoterForm />
      </section>
      <QuoteInfo
        data={quotesData.garantias_data}
        quoteTitle="Seguros para Garantias"
      />
    </>
  );
}
