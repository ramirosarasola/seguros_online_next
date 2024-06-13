import Carousel from "@/components/ui/carousel.component"
import { aseguradoras } from "../../../../assets/aseguradoras/index";
import { marcas } from "../../../../assets/marcas/index";

export const NuestrosAliados = () => {
  return (
    <>
      <Carousel data={marcas} cantItems={3} title={'Seguros de Autos'} />
      <Carousel data={aseguradoras} cantItems={3} title={'Compañías'} />
    </>
  )
}