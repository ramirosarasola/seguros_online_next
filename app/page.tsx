import type { Metadata } from "next";
import CarQuoterForm from "./(client)/components/car-quoter-form/car-quoter-form.component";
import { NuestrosSeguros } from "./(client)/components/nuestros-seguros/nuestros-seguros.component";
import { NuestrosAliados } from "./(client)/components/nuestros-aliados/nuestros-aliados.component";
// import { FeedbackComponent } from "./components/feedback/feedback.component";
import { InformationComponent } from "./(client)/components/information/information.component";

export const metadata: Metadata = {
  title: "Seguros Para Autos | SegurosOnline | Mejoramos cualquier Presupuesto",
  description:
    "Cotizá seguros para autos online. Mejorá tu póliza actual ahorrando hasta un 30% sin perder beneficios. Trabajamos con todas las aseguradoras, Cotizá Ya!",
};

export default function HomePage() {
  return (
    <>
      <section className="px-4 md:px-16 flex flex-1 py-10 min-h-[calc(100vh-96px)] bg-home-img bg-light_primary">
        <CarQuoterForm />
      </section>

      <section className="px-4 md:px-16 bg-tertiary">
        <NuestrosSeguros />
      </section>

      <section className="px-4 md:px-16 bg-tertiary h-fit pt-10">
        <NuestrosAliados />
      </section>

      {/* <section className="px-4 md:px-16 bg-tertiary h-fit py-10 flex flex-col items-center justify-between">
        <FeedbackComponent/>
      </section> */}

      <section className="px-4 md:px-16 bg-tertiary h-fit pb-10 flex flex-col items-center justify-between">
        <InformationComponent />
      </section>
    </>
  );
}
