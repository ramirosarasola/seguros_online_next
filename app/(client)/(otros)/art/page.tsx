import type {Metadata} from "next";
import { ARTQuoterForm } from "../../components/quoter-form/art-quoter-form.component";
import { QuoteInfo } from "../../components/quotes-info/quote-info.component";
import { quotesData } from "../../components/quotes-info/data";

export const metadata: Metadata = {
  title: "Art",
  description: "Art",
}

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