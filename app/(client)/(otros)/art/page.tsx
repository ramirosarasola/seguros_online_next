import type { Metadata } from "next";
import { ARTQuoterForm } from "../../components/quoter-form/art-quoter-form.component";
import { QuoteInfo } from "../../components/quotes-info/quote-info.component";
import { quotesData } from "../../components/quotes-info/data";

export const metadata: Metadata = {
  title:
    "Cotiza tu seguro de ART ahora | Mejoramos tu costo actual hasta un 40% | SegurosOnline",
  description:
    "Contratar seguro ART. Cotiza online tu seguros dfe ART enlas mejores Compañias. Mejoramos cualquier presupuesta. Cotiza Ya Mismo!",
  openGraph: {
    title:
      "Cotiza tu seguro de ART ahora | Mejoramos tu costo actual hasta un 40% | SegurosOnline",
    description:
      "Contratar seguro ART. Cotiza online tu seguros dfe ART enlas mejores Compañias. Mejoramos cualquier presupuesta. Cotiza Ya Mismo!",
    url: "https://www.segurosonline.com.ar/art",
    siteName: "SegurosOnline",
    images: [
      {
        url: "https://www.segurosonline.com.ar/contratar-seguro-art.jpg",
      },
    ],
    locale: "es-AR",
    type: "website",
  },
  twitter: {
    title:
      "Cotiza tu seguro de ART ahora | Mejoramos tu costo actual hasta un 40% | SegurosOnline",
    description:
      "Contratar seguro ART. Cotiza online tu seguros dfe ART enlas mejores Compañias. Mejoramos cualquier presupuesta. Cotiza Ya Mismo!",
    images: ["https://www.segurosonline.com.ar/contratar-seguro-art.jpg"],
    card: "summary_large_image",
    creator: "@SegurosOnline",
  },
};

export default function ArtPage() {
  return (
    <>
      <section className="px-4 md:px-16 justify-end flex flex-1 py-10 min-h-[calc(100vh-96px)] bg-art-img bg-light_primary">
        <ARTQuoterForm />
      </section>
      <QuoteInfo data={quotesData.art_data} quoteTitle="Seguros para Art" />
    </>
  );
}
