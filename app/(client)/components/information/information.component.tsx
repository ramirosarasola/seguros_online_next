'use client';

import { useState } from "react";
import { CardTitleComponent } from "../card-title.component";
import Link from "next/link";

export const InformationComponent = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <CardTitleComponent title="Seguros de Autos - Cotizar Seguro de Auto" />
      <article className="flex flex-col items-start">
        <div className="flex flex-col items-start justify-between">
          <ul className="w-full flex items-start justify-between mb-6">
            <li className={`${activeTab === "tab1" ? "active_tab" : ""} font-bold text-gray-600 `}>
              <Link href="#tab1" onClick={() => handleTabClick("tab1")}>Coberturas Básicas</Link>
            </li>
            <li className={`${activeTab === "tab2" ? "active_tab" : ""} font-bold text-gray-600 `}>
              <Link href="#tab2" onClick={() => handleTabClick("tab2")}>Coberturas Adicionales</Link>
            </li>
            <li className={`${activeTab === "tab3" ? "active_tab" : ""} font-bold text-gray-600 `}>
              <Link href="#tab3" onClick={() => handleTabClick("tab3")}>En caso de Siniestro</Link>
            </li>
            <li className={`${activeTab === "tab4" ? "active_tab" : ""} font-bold text-gray-600 `}>
              <Link href="#tab4" onClick={() => handleTabClick("tab4")}>Seguros de Autos</Link>
            </li>
            <li className={`${activeTab === "tab5" ? "active_tab" : ""} font-bold text-gray-600 `}>
              <Link href="#tab5" onClick={() => handleTabClick("tab5")}>¿Cuál es el mejor seguro de automotor?</Link>
            </li>
          </ul>

          <div className="tabs-container">
            <div className="" id="tab1" style={{ display: activeTab === "tab1" ? "block" : "none" }}>
              <strong>Robo total:</strong>
              Robo o hurto de la unidad asegurada. Se considera robo total pasado los 30 días desde la fecha de desaparición del vehículo para que la Compañía responda por la suma asegurada{'\n'}
              <strong>Robo parcial:</strong>
              Robo o hurto de las partes que componen un vehículo. La compañía debe responder por estos faltantes, cuando el resto de los faltantes supera el 80% del valor de la unidad, se puede considerar destrucción total{'\n'}
              <strong>Incendio total:</strong>
              son los daños sufridos por el auto como consecuencia de la acción del fuego o explosión que hubieran dejado a la unidad con daños en más del 80%{'\n'}
              <strong>Incendio parcial:</strong> 
              son los daños materiales sufridos por el auto como consecuencia de la acción del fuego o explosión que hubieran dejado a la unidad con daños en menos del 80%{'\n'}
              <strong>Daño Total:</strong>
              En caso que el valor de reparación sea igual o superior al 80% del valor del vehículo al momento del siniestro. La compañía indemnizará al asegurado con el 100% del valor de la suma asegurada{'\n'}
              <strong>Daños Parciales al amparo de robo aparecido:</strong> 
              Cubre Los daños que resultaran como consecuencia del robo o hurto del vehículo tras la recuperación del mismo. 
            </div>
            <div className="" id="tab2" style={{ display: activeTab === "tab2" ? "block" : "none" }}>
              <strong>Rotura de Cristales:</strong>
              Cobertura de Luneta y Parabrisas por cualquier tipo de daño o rajadura, según cláusulas específicas de cada Compañía{'\n'}
              <strong>Vidrios laterales:</strong>
              Cobertura de estos cristales por cualquier tipo de lesión o rajadura, según cláusulas específicas de cada Compañía{'\n'}
              <strong>Rotura de cerradura:</strong>
              Reposición de cerradura de las puertas por intento de robo o hurto.{'\n'}
              <strong>Rueda de auxilio: </strong>
              Reposición del auxilio como consecuencia de robo o hurto.{'\n'}
              <strong>Reposición llave: </strong>
              Reposición de llaves ante robo o extravío{'\n'}
              <strong>Reposición a nuevo de unidades 0KM: </strong>
              Esta cláusula cubre a autos 0km, que hubieran sido aseguradas como 0km, hasta 12 meses de antigüedad. En caso de robo total o destrucción total el vehículo tendrá reposición como 0km.{'\n'}
              <strong>Reposición a nuevo de ruedas de 0KM:</strong> 
              Esta cláusula protege únicamente los vehículos que hubieran sido asegurados como 0KM, y según la cobertura cubre durante los 2 primeros años. En caso de robo total se repondrán los neumáticos a nuevo{'\n'}
              <strong>Rastreo Satelital</strong>
              En caso que la compañía estipule que es necesario puede colocar un dispositivo de rastreo satelital en el automotor asegurado{'\n'}
              <strong>Daños parciales por granizo: </strong>
              Cobertura que responde por aquellos daños ocasionados por el accionar del granizo, por lo general la compañías fijan un monto tope para la reparación de este daño.{'\n'}
              <strong>Asistencia en viajes:</strong>
              Asistencia general al viajeros que se encuentren a más de 100km del lugar de residencia.{'\n'}
              <strong>Asistencia Legal: </strong>
              Asesoramiento jurídico en caso de accidentes de tránsito.{'\n'}
              <strong>Asistencia Mecánica: </strong>
              Asistencia mecánica ligera. por ej: cambio de neumáticos, lubricantes, arreglos generales, carga de combustible, etc.{'\n'}
              <strong>Remolque: </strong>
              Acarreo del vehículo con grúa, el kilometraje es variable según cada compañía{'\n'}
              <strong>Extensión de cobertura a Mercosur: </strong>
              Cobertura obligatoria de Responsabilidad Civil hacia terceros en cualquier país adherido a este acuerdo de Mercosur.				
            </div>
            <div className="" id="tab3" style={{ display: activeTab === "tab3" ? "block" : "none" }}>
              En caso de siniestro de un vehículo asegurado a través de <strong>SegurosOnline.com.ar</strong> el asegurado deberá comunicarse con nosotros para radicar la denuncia al 0810 345 9000 / 011 5199-8100, ó por mail a:  denuncias@segurosonline.com.ar{'\n'}
              En caso que solo hay daños materiales, no haría falta hacer la denuncia en la policía. De todos modos una vez informada la denuncia en <strong>segurosOnline.com.ar</strong> nuestros ejecutivos de siniestros enviarán toda la información requerida para cada caso{'\n'}
              <strong>SegurosOnline.com.ar</strong> se encarga de hacer el reclamo en las compañías del tercero, para que nuestro cliente no tenga que perder tiempo y dinero en estos trámites{'\n'}
              La compañía aseguradora asignará un gestor para reclamos y gestiones diversas.
            </div>
            <div className="" id="tab4" style={{ display: activeTab === "tab4" ? "block" : "none" }}>
              Algunas de las compañías con las que trabajamos son <strong>Allianz, Answer, Mapfre, Integrity, Mercantil Andina, Victoria y Meridional Seguros, Caledonia, Sura, SMG Seguros, Nación Seguros, Seguros Rivadavia, QBE Seguros</strong>
            </div>
            <div className="" id="tab5" style={{ display: activeTab === "tab5" ? "block" : "none" }}>
              <p><strong>Seguros de autos</strong></p>
              <p>Si estas buscando seguros de auto confiables, llegaste al lugar indicado. En esta sección de <strong>Seguros Online</strong> te ofrecemos todas las alternativas para que encuentres las opciones que existen en el mercado argentino para seguros para automóviles. Además, te damos consejos y tips para ayudarte a elegir tu próximo.</p>
              <p><strong>¿Cuál es el mejor seguro de automotor?</strong></p>
              <p>Te vamos a nombrar algunas de las compañías con los mejores seguros de autos de Argentina:</p>
              <p>Allianz Seguros&nbsp;</p>
              <p>La Caja</p>
              <p>Mapfre</p>
              <p>Santander Seguros</p>
              <p>Caja Médicos</p>
              <p>Sancor Seguros</p>
              <p>Triunfo Seguros</p>
              <p>Mercantil Andina</p>
              <p>Rivadavia Seguros, entre otras más.</p>
              <p>En nuestra página, tenemos notas sobre cómo operan algunas de las compañías de seguro de auto. Podrás encontrar información completa y detallada de lo que les ofrecen a sus beneficiarios. Incluso, podrás encontrar un listado en cada una de ellas con su nivel de satisfacción y otros datos útiles.</p>
              <p>Existen muchas compañías de seguros en la Argentina para asegurar tu automóvil. Frente al interrogante ¿Cómo se puede estar tranquilo de que la empresa elegida es la mejor?</p>
              <p>En <strong>Seguros Online</strong> te ayudamos a elegir el mejor seguro para tu auto. A través de nuestra página, invitamos a la gente a que consulte y también opine sobre su compañía de seguros automotores. Asesoramos cuáles son los puntos a favor y cuáles son los puntos débiles de cada compañía.</p>
              <p>De esa manera, constantemente buscamos generar la mejor información y más transparente de las mejores compañías de seguros de autos de la Argentina. Nuestro objetivo es ayudarte a vos a que elijas tranquilo la empresa de seguros con la que vas a asegurar tu vehículo.</p>
              <p>Si ya sos cliente de una empresa de seguros de autos, dejanos tu opinión, tus dudas o consultanos sobre lo que necesites saber. Dejanos también tu comentario. Y, si lo que estás buscando son referencias de cualquier otra empresa, esperamos que la información de nuestro sitio web te sea de utilidad para que puedas elegir correctamente tu próximo seguro de autos.</p>
              <p>Si estás buscando seguro para tu auto, puede que te interese conocer cómo se inicia el sistema de gestión y nosotros te simplificamos los pasos.&nbsp;</p>
              <p>Encuentra aquí todas las empresas de seguro en Argentina que ofrecen cobertura para tu automóvil y otros vehículos. Desde los seguros de responsabilidad civil o contra terceros hasta las pólizas ante todo riesgo.</p>
              <p>En <strong>Seguros Online</strong> te facilitamos y resolvemos las dudas con la búsqueda adecuada para que puedas seguir con el transcurso de la solicitud. Con nuestro equipo de trabajo, te guiamos para que encuentres todas las opciones para asegurar tu auto.</p>
              <p><strong>Seguros Online</strong> es la forma ideal para acceder rápidamente al mejor seguro según tus necesidades. Trabajamos y conocemos las mejores compañías, garantizando siempre el mejor servicio para cada caso en especial.&nbsp;&nbsp;</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
