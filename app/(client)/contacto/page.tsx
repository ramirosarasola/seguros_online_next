import { HouseFormQuoter } from "../components/quoter-form/house-quoter-form.component";
import { ContactForm } from "./components/contact-form";

export default function ContactPage() {
  return (
    <div className="h-fit bg-tertiary">
      <section className="h-[400px] flex flex-1">
        <iframe
          className="flex flex-1"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0806070383605!2d-58.37432962358016!3d-34.602123157415285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a335332ab82725%3A0xeaf23399a14d5b9b!2sLavalle%20348%205%C2%BA%20Piso%2C%20C1047%20San%20Nicolas%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1702985030495!5m2!1ses!2sar"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="flex flex-col items-center justify-center w-[30%] bg-[#2b2c30] text-secondary gap-4">
          <p className="text-[28px]">Estamos en...</p>
          <div className="w-[50px] h-[2px] rounded-sm bg-primary"></div>
          <p className="text-[18px]">Lavalle 348 5º Piso</p>
          <p className="text-[18px]">Capital Federal - Argentina</p>
        </div>
      </section>
      <section className="flex flex-1 py-10 px-4 md:px-16">
        {/* Contact Form Div */}
        <div className="flex flex-1 flex-col items-start justify-start gap-10">
          <h6 className="text-[22px]">¿Por qué seguro quiere consultar?</h6>
          <ContactForm/>
        </div>

        {/* Contact Info Div */}
        <div className="flex flex-col items-start justify-start w-[30%] gap-10 px-8">
          <h6 className="text-[22px]">Datos de Contacto</h6>
          <div className="flex flex-col items-start justify-start gap-8">
            <div className="w-full flex items-center justify-start gap-6">
              <span>📞</span>
              <div className="flex flex-col items-start justify-between">
                <p>Telefonos:</p>
                <p>0810 345 9000 | (011) 5199-8100</p>
              </div>
            </div>
            <div className="w-full flex items-center justify-start gap-6">
              <span>📧</span>
              <div className="flex flex-col items-start justify-between">
                <p>Email:</p>
                <p>info@segurosonline.com.ar</p>
              </div>
            </div>
            <div className="w-full flex items-center justify-start gap-6">
              <span>📲</span>
              <div className="flex flex-col items-start justify-between">
                <p>WhatsApp:</p>
                <p>(011) 15 6463-5002</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
