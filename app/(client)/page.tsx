import type { Metadata } from "next";
import CarQuoterForm from "./components/car-quoter-form/car-quoter-form.component";
import { NuestrosSeguros } from "./components/nuestros-seguros/nuestros-seguros.component";

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
      <NuestrosSeguros />
    </>
  );
}
