import Image from "next/image";
import afip_logo from '../../public/afip_logo-op.webp';
import ssn_logo from '../../public/ssn_logo-op.webp';

export const Footer = () => {
  return (
    <footer className='bg-primary text-secondary flex flex-col px-4 md:px-16 py-8 gap-8 justify-between items-center'>
      <section className='flex md:flex-row flex-col w-full gap-8'>
        <div className="w-full md:w-[60%]">
          <h3 className="text-title-md font-w-title-md mb-4">Nosotros</h3>
          <p>SegurosOnline.com.ar es el primer broker de seguros online del país, nacimos en 2008 para acercar al mercado una forma rápida, segura y transparente de contratación de seguros. Con una gran inversión en tecnología logramos ofrecer a nuestros clientes, la mejor cobertura al mejor precio, a través de la comparación de los distintos productos de las mejores compañías del mercado. Hoy SegurosOnline.com.ar forma parte de Centralia Brokers SA, matrícula 1308 de la Superintendencia de Seguros de la Nación.</p>
        </div>
        <div className="w-full flex flex-1 flex-col">
          <h3 className='text-title-md font-w-title-md mb-4'>Contacto</h3>
          <p>  Lavalle 348 5º Piso - Capital Federal - Argentina</p>
          <p>  0810 345 9000 | (011) 5199-8100</p>
          <p> (011) 15 6463-5002 (WhatsApp)</p>
          <p> info@segurosonline.com.ar</p>
        </div>
      </section>
      <div className='w-full md:flex-row flex-col flex items-center justify-start gap-8'>
        <p className="w-full md:w-[60%]">© 2023 SegurosOnline.com.ar - Desarrollado por IDE-AR y RamSar-Dev</p>
        <div className="flex gap-4">
          <Image className="h-auto" src={afip_logo} alt="afip" width={100}/>
          <Image className="h-auto" src={ssn_logo} alt="superintendencia de seguros de la nacion" width={100}/>
        </div>
      </div>
    </footer>
  )
};
