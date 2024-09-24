import Carousel from "@/components/ui/carousel.component";
import { marcas } from "../../../../assets/marcas/index";

export const MarcasDeAutos = () => {
  return (
    <>
      <Carousel data={marcas} cantItems={3} title={"Seguro Automotor"} />
    </>
  );
};
