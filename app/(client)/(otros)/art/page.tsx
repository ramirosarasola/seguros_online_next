import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Art",
  description: "Art",
}

export default function ArtPage() {
  return (
    <section className="px-4 md:px-16 justify-end flex flex-1 py-10 min-h-[calc(100vh-96px)] bg-art-img bg-light_primary">
      {/* <CarQuoterForm /> */}
    </section>
  );
}