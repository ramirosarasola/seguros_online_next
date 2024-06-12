import { CardTitleComponent } from "../card-title.component";
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
    link: "hogar",
    alt: "seguros para el hogar",
  },
  {
    icon: office_icon,
    title: "Seguros para empresa",
    content:
      "Grandes empresas confían en nosotros porque ofrecemos un excelente servicio. ART – Seguros de Vida – Accidentes Personales - Integrales – Cauciones.",
    link: "otros/comercio",
    alt: "seguros para negocios",
  },
  {
    icon: relationship_icon,
    title: "Y mucho más...",
    content:
      "SegurosOnline.com.ar te ofrece soluciones integrales para que puedas contratar el seguro que más se ajuste a tus necesidades sin moverte de tu casa.",
    link: "contact",
    alt: "contratar seguros",
  },
];

export const NuestrosSeguros = () => {
  return (
    <section className="pb-10 bg-tertiary px-4 md:px-16 flex flex-col items-center justify-between">
      <CardTitleComponent title="Nuestros Seguros" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
    </section>
  );
};
