import Carousel from "@/components/ui/carousel.component";
import { aseguradoras } from "../../../../assets/aseguradoras/index";

export const Companias = () => {
  return (
    <>
      <Carousel
        background="#FFF"
        data={aseguradoras}
        cantItems={3}
        title={"Compañías de Seguros"}
      />
    </>
  );
};
