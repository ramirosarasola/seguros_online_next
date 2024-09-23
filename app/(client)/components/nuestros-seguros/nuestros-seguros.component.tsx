import { SectionTitleComponent } from "../../../../components/ui/section-title.component";
import car_icon from "../../../../assets/001_car.png";
import house_icon from "../../../../assets/002_house.png";
import office_icon from "../../../../assets/003_office_building.png";
import relationship_icon from "../../../../assets/004_relationship.png";
import CardSegurosComponent from "./card-seguros.component";

const services = [
  {
    icon: car_icon,
    title: "Seguros para autos",
    content:
      "Brindamos un excelente respaldo para que pueda vivir tranquilo y seguro. Conozca todos los seguros que podemos brindarle para su hogar y para sus bienes.",
    link: "/",
    alt: "seguros para autos",
  },
  {
    icon: house_icon,
    title: "Seguros para tu hogar",
    content:
      "Obtené una cotización online del mejor seguro para tu auto. Trabajamos con las mejores compañías y garantizamos los mejores precios del mercado.",
    link: "seguros-para-hogar",
    alt: "seguros para el hogar",
  },
  {
    icon: office_icon,
    title: "Seguros para empresa",
    content:
      "Grandes empresas confían en nosotros porque ofrecemos un excelente servicio. ART – Seguros de Vida – Accidentes Personales - Integrales – Cauciones.",
    link: "seguros-para-comercio",
    alt: "seguros para negocios",
  },
  {
    icon: relationship_icon,
    title: "Y mucho más...",
    content:
      "SegurosOnline.com.ar te ofrece soluciones integrales para que puedas contratar el seguro que más se ajuste a tus necesidades sin moverte de tu casa.",
    link: "contacto",
    alt: "contratar seguros",
  },
];

export const NuestrosSeguros = () => {
  return (
    <div className="py-10 bg-tertiary flex flex-col items-center justify-between mx-auto max-w-[1200px]">
      <SectionTitleComponent title="Nuestros Seguros" />
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {services.map((item, i) => {
          return (
            <CardSegurosComponent
              key={i}
              icon={item.icon}
              title={item.title}
              content={item.content}
              link={item.link}
              alt={item.alt}
            />
          );
        })}
      </div>
    </div>
  );
};
