import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type CardProps = {
  icon: StaticImageData;
  title: string;
  content: string;
  link: string;
  alt: string;
}

const CardSegurosComponent = ({ icon, title, content, link, alt }: CardProps) => {

  return (
    <article className="h-[400px] w-full p-4 bg-white shadow-lg flex flex-col justify-start items-center relative text-center">
      <Image loading='lazy' src={icon} alt={alt} width={64} height={64} />
      <div className=" mt-10 flex flex-col items-center justify-center gap-8">
        <h2 className="text-[1.5rem] font-bold h-[36px] overflow-hidden">{title}</h2>
        <p className="text-center text-[1rem] h-[120px] overflow-hidden">{content}</p>
      </div>
      <Link href={link} className="bg-primary text-white h-12 w-auto min-w-40 font-bold flex items-center  justify-center absolute bottom-[1rem] ">VER MAS</Link>
    </article>
  )
}

export default CardSegurosComponent