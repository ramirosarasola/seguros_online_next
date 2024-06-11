import type { Metadata } from "next";
import CarQuoterForm from "./components/car-quoter-form/car-quoter-form.component";
import { useRouter } from "next/router";



export const metadata: Metadata = {
  title: "Seguros Para Autos | SegurosOnline | Mejoramos cualquier Presupuesto",
  description: "Cotizá seguros para autos online. Mejorá tu póliza actual ahorrando hasta un 30% sin perder beneficios. Trabajamos con todas las aseguradoras, Cotizá Ya!",
};

export default function HomePage() {
  return (
    <section className="flex flex-1 px-4 md:px-16 bg-home-img bg-light_primary">
      <CarQuoterForm/>
    </section>
  );
}
