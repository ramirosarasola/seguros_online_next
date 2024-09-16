"use client";

import { useState } from "react";
import { SectionTitleComponent } from "../../../../components/ui/section-title.component";
import Link from "next/link";

export const InformationComponent = () => {
  const [activeTab, setActiveTab] = useState("coberturas_basicas");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div
      id="section_container"
      className="max-w-[1200px] mx-auto flex flex-col items-center"
    >
      <SectionTitleComponent title="Seguros de Autos - Cotizar Seguros de Autos" />
      <article className="flex flex-col items-start">
        <div className="flex flex-col items-start justify-between">
          <ul className="w-full flex flex-col md:flex-row justify-between items-start mb-6">
            <li
              className={`${
                activeTab === "coberturas_basicas" ? "active_tab" : ""
              } font-bold text-gray-800 text-left `}
            >
              <Link
                href="#section_container"
                onClick={() => handleTabClick("coberturas_basicas")}
              >
                <h3>Coberturas Básicas</h3>
              </Link>
            </li>
            <li
              className={`${
                activeTab === "coberturas_adicionales" ? "active_tab" : ""
              } font-bold text-gray-800 text-left `}
            >
              <Link
                href="#section_container"
                onClick={() => handleTabClick("coberturas_adicionales")}
              >
                <h3>Coberturas Adicionales</h3>
              </Link>
            </li>
            <li
              className={`${
                activeTab === "siniestros" ? "active_tab" : ""
              } font-bold text-gray-800 text-left `}
            >
              <Link
                href="#section_container"
                onClick={() => handleTabClick("siniestros")}
              >
                <h3>En caso de Siniestro</h3>
              </Link>
            </li>
            <li
              className={`${
                activeTab === "seguros_de_autos" ? "active_tab" : ""
              } font-bold text-gray-800 text-left `}
            >
              <Link
                href="#section_container"
                onClick={() => handleTabClick("seguros_de_autos")}
              >
                <h3>Seguros de Autos</h3>
              </Link>
            </li>
            <li
              className={`${
                activeTab === "mejor_seguros_para_tu_vehiculo"
                  ? "active_tab"
                  : ""
              } font-bold text-gray-800 text-left `}
            >
              <Link
                href="#section_container"
                onClick={() => handleTabClick("mejor_seguros_para_tu_vehiculo")}
              >
                <h3>¿Cuál es el mejor seguro de automotor?</h3>
              </Link>
            </li>
          </ul>

          <div>
            <div
              id="coberturas_basicas"
              style={{
                display: activeTab === "coberturas_basicas" ? "block" : "none",
              }}
            >
              <p className="mb-4">
                <strong>Robo total: </strong> Robo o hurto de la unidad
                asegurada. Se considera robo total pasado los 30 días desde la
                fecha de desaparición del vehículo para que la Compañía responda
                por la suma asegurada
              </p>
              <p className="mb-4">
                <strong>Robo parcial: </strong>
                Robo o hurto de las partes que componen un vehículo. La compañía
                debe responder por estos faltantes, cuando el resto de los
                faltantes supera el 80% del valor de la unidad, se puede
                considerar destrucción total.
              </p>
              <p className="mb-4">
                <strong>Incendio total: </strong>
                Son los daños sufridos por el auto como consecuencia de la
                acción del fuego o explosión que hubieran dejado a la unidad con
                daños en más del 80%.
              </p>
              <p className="mb-4">
                <strong>Incendio parcial: </strong>
                Son los daños materiales sufridos por el auto como consecuencia
                de la acción del fuego o explosión que hubieran dejado a la
                unidad con daños en menos del 80%.
              </p>
              <p className="mb-4">
                <strong>Daño Total: </strong>
                En caso que el valor de reparación sea igual o superior al 80%
                del valor del vehículo al momento del siniestro. La compañía
                indemnizará al asegurado con el 100% del valor de la suma
                asegurada.
              </p>
              <p className="mb-4">
                <strong>Daños Parciales al amparo de robo aparecido: </strong>
                Cubre los daños que resultaran como consecuencia del robo o
                hurto del vehículo tras la recuperación del mismo.
              </p>
            </div>
            <div
              id="coberturas_adicionales"
              style={{
                display:
                  activeTab === "coberturas_adicionales" ? "block" : "none",
              }}
            >
              <p className="mb-4">
                <strong>Rotura de Cristales: </strong>
                Cobertura de Luneta y Parabrisas por cualquier tipo de daño o
                rajadura, según cláusulas específicas de cada Compañía.
              </p>
              <p className="mb-4">
                <strong>Vidrios laterales: </strong>
                Cobertura de estos cristales por cualquier tipo de lesión o
                rajadura, según cláusulas específicas de cada Compañía.
              </p>
              <p className="mb-4">
                <strong>Rotura de cerradura: </strong>
                Reposición de cerradura de las puertas por intento de robo o
                hurto.
              </p>
              <p className="mb-4">
                <strong>Rueda de auxilio: </strong>
                Reposición del auxilio como consecuencia de robo o hurto.
              </p>
              <p className="mb-4">
                <strong>Reposición llave: </strong>
                Reposición de llaves ante robo o extravío.
              </p>
              <p className="mb-4">
                <strong>Reposición a nuevo de unidades 0KM: </strong>
                Esta cláusula cubre a autos 0km, que hubieran sido aseguradas
                como 0km, hasta 12 meses de antigüedad. En caso de robo total o
                destrucción total el vehículo tendrá reposición como 0km.
              </p>
              <p className="mb-4">
                <strong>Reposición a nuevo de ruedas de 0KM: </strong>
                Esta cláusula protege únicamente los vehículos que hubieran sido
                asegurados como 0KM, y según la cobertura cubre durante los 2
                primeros años. En caso de robo total se repondrán los neumáticos
                a nuevo.
              </p>
              <p className="mb-4">
                <strong>Rastreo Satelital: </strong>
                En caso que la compañía estipule que es necesario puede colocar
                un dispositivo de rastreo satelital en el automotor asegurado.
              </p>
              <p className="mb-4">
                <strong>Daños parciales por granizo: </strong>
                Cobertura que responde por aquellos daños ocasionados por el
                accionar del granizo, por lo general la compañías fijan un monto
                tope para la reparación de este daño.
              </p>
              <p className="mb-4">
                <strong>Asistencia en viajes: </strong>
                Asistencia general a los viajeros que se encuentren a más de
                100km del lugar de residencia.
              </p>
              <p className="mb-4">
                <strong>Asistencia Legal: </strong>
                Asesoramiento jurídico en caso de accidentes de tránsito.
              </p>
              <p className="mb-4">
                <strong>Asistencia Mecánica: </strong>
                Asistencia mecánica ligera, por ej: cambio de neumáticos,
                lubricantes, arreglos generales, carga de combustible, etc.
              </p>
              <p className="mb-4">
                <strong>Remolque: </strong>
                Acarreo del vehículo con grúa, el kilometraje es variable según
                cada compañía.
              </p>
              <p className="mb-4">
                <strong>Extensión de cobertura a Mercosur: </strong>
                Cobertura obligatoria de Responsabilidad Civil hacia terceros en
                cualquier país adherido a este acuerdo de Mercosur.
              </p>
            </div>
            <div
              className="min-h-[300px]"
              id="siniestros"
              style={{ display: activeTab === "siniestros" ? "block" : "none" }}
            >
              En caso de siniestro de un vehículo asegurado a través de{" "}
              <strong>SegurosOnline.com.ar</strong> el asegurado deberá
              comunicarse con nosotros para radicar la denuncia al 0810 345 9000
              / 011 5199-8100, ó por mail a: denuncias@segurosonline.com.ar En
              caso que solo hay daños materiales, no haría falta hacer la
              denuncia en la policía. De todos modos una vez informada la
              denuncia en <strong>segurosOnline.com.ar</strong> nuestros
              ejecutivos de siniestros enviarán toda la información requerida
              para cada caso
              <strong> SegurosOnline.com.ar</strong> se encarga de hacer el
              reclamo en las compañías del tercero, para que nuestro cliente no
              tenga que perder tiempo y dinero en estos trámites La compañía
              aseguradora asignará un gestor para reclamos y gestiones diversas.
            </div>
            <div
              className="min-h-[300px]"
              id="seguros_de_autos"
              style={{
                display: activeTab === "seguros_de_autos" ? "block" : "none",
              }}
            >
              <p className="mb-4">
                Algunas de las compañías con las que trabajamos son:
              </p>
              <strong>
                Allianz, Answer, Mapfre, Integrity, Mercantil Andina, Victoria y
                Meridional Seguros, Caledonia, Sura, SMG Seguros, Nación
                Seguros, Seguros Rivadavia, QBE Seguros
              </strong>
              <p className="mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repudiandae blanditiis necessitatibus iste possimus
                exercitationem ea soluta beatae unde, vitae minima, molestias
                doloribus, nesciunt dolor quia velit harum iure asperiores
                quibusdam? Exercitationem fuga sequi magnam blanditiis
                accusantium hic consequuntur voluptatem ipsa assumenda,
                asperiores, expedita sed quibusdam? Delectus maxime unde a modi
                quis quod repudiandae quisquam voluptatibus repellat quam natus,
                quibusdam totam! Tempore sed praesentium illum, modi repellendus
                dolores expedita fugit, autem deserunt ratione aliquid, incidunt
                dicta officiis dolorum adipisci voluptate est exercitationem.
                Animi, eaque? Inventore, veritatis ea perspiciatis fugiat quasi
                illo. Ratione dolore debitis eius rem adipisci vitae molestias,
                repellat ullam nihil laudantium architecto a, fuga illum iste
                facere sunt sapiente, aut velit fugiat quisquam labore ducimus.
                Earum possimus illo impedit.
              </p>
            </div>
            <div
              id="mejor_seguros_para_tu_vehiculo"
              style={{
                display:
                  activeTab === "mejor_seguros_para_tu_vehiculo"
                    ? "block"
                    : "none",
              }}
            >
              <p className="mb-4">
                <strong>Seguros de autos</strong>
              </p>
              <p className="mb-4">
                Si estas buscando seguros de auto confiables, llegaste al lugar
                indicado. En esta sección de <strong>Seguros Online</strong> te
                ofrecemos todas las alternativas para que encuentres las
                opciones que existen en el mercado argentino para seguros para
                automóviles. Además, te damos consejos y tips para ayudarte a
                elegir tu próximo.
              </p>
              <p className="mb-4">
                <strong>¿Cuál es el mejor seguro de automotor?</strong>
              </p>
              <p className="mb-4">
                Te vamos a nombrar algunas de las compañías con los mejores
                seguros de autos de Argentina:
              </p>
              <p className="mb-4">Allianz Seguros&nbsp;</p>
              <p className="mb-4">La Caja</p>
              <p className="mb-4">Mapfre</p>
              <p className="mb-4">Santander Seguros</p>
              <p className="mb-4">Caja Médicos</p>
              <p className="mb-4">Sancor Seguros</p>
              <p className="mb-4">Triunfo Seguros</p>
              <p className="mb-4">Mercantil Andina</p>
              <p className="mb-4">Rivadavia Seguros, entre otras más.</p>
              <p className="mb-4">
                En nuestra página, tenemos notas sobre cómo operan algunas de
                las compañías de seguro de auto. Podrás encontrar información
                completa y detallada de lo que les ofrecen a sus beneficiarios.
                Incluso, podrás encontrar un listado en cada una de ellas con su
                nivel de satisfacción y otros datos útiles.
              </p>
              <p className="mb-4">
                Existen muchas compañías de seguros en la Argentina para
                asegurar tu automóvil. Frente al interrogante ¿Cómo se puede
                estar tranquilo de que la empresa elegida es la mejor?
              </p>
              <p className="mb-4">
                En <strong>Seguros Online</strong> te ayudamos a elegir el mejor
                seguro para tu auto. A través de nuestra página, invitamos a la
                gente a que consulte y también opine sobre su compañía de
                seguros automotores. Asesoramos cuáles son los puntos a favor y
                cuáles son los puntos débiles de cada compañía.
              </p>
              <p className="mb-4">
                De esa manera, constantemente buscamos generar la mejor
                información y más transparente de las mejores compañías de
                seguros de autos de la Argentina. Nuestro objetivo es ayudarte a
                vos a que elijas tranquilo la empresa de seguros con la que vas
                a asegurar tu vehículo.
              </p>
              <p className="mb-4">
                Si ya sos cliente de una empresa de seguros de autos, dejanos tu
                opinión, tus dudas o consultanos sobre lo que necesites saber.
                Dejanos también tu comentario. Y, si lo que estás buscando son
                referencias de cualquier otra empresa, esperamos que la
                información de nuestro sitio web te sea de utilidad para que
                puedas elegir correctamente tu próximo seguro de autos.
              </p>
              <p className="mb-4">
                Si estás buscando seguro para tu auto, puede que te interese
                conocer cómo se inicia el sistema de gestión y nosotros te
                simplificamos los pasos.&nbsp;
              </p>
              <p className="mb-4">
                Encuentra aquí todas las empresas de seguro en Argentina que
                ofrecen cobertura para tu automóvil y otros vehículos. Desde los
                seguros de responsabilidad civil o contra terceros hasta las
                pólizas ante todo riesgo.
              </p>
              <p className="mb-4">
                En <strong>Seguros Online</strong> te facilitamos y resolvemos
                las dudas con la búsqueda adecuada para que puedas seguir con el
                transcurso de la solicitud. Con nuestro equipo de trabajo, te
                guiamos para que encuentres todas las opciones para asegurar tu
                auto.
              </p>
              <p className="mb-4">
                <strong>Seguros Online</strong> es la forma ideal para acceder
                rápidamente al mejor seguro según tus necesidades. Trabajamos y
                conocemos las mejores compañías, garantizando siempre el mejor
                servicio para cada caso en especial.&nbsp;&nbsp;
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
