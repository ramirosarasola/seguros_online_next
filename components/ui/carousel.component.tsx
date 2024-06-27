"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type CarouseProps = {
  data: { img: StaticImageData; nombre: string }[];
  cantItems: number;
  title: string;
};

const Carousel = ({ data, cantItems, title }: CarouseProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === Math.ceil(data.length / cantItems) - 1 ? 0 : prevSlide + 1
    );
  };


  // Funciones para cambiar de slide cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? Math.ceil(data.length / cantItems) - 1 : prevSlide - 1
    );
  };

  // Agrupar los elementos en grupos de cantItems
  const slidesToShow = [];
  for (let i = 0; i < data.length; i += cantItems) {
    slidesToShow.push(data.slice(i, i + cantItems));
  }

  return (
    <article className="max-w-screen">
      <h2 className="text-[2rem] font-bold text-center">{title}</h2>
      <div className="relative h-fit py-4">
        <div className="overflow-hidden w-full h-40 bg-gray-200">
          {slidesToShow.map(
            (slideGroup, index) =>
              index == currentSlide && (
                <div
                  key={index}
                  className={`absolute top-0 left-0 z-[40] bg-tertiary w-full h-full flex items-center transition-transform ease-in-out duration-300 ${
                    index === currentSlide ? "translate-x-0" : "translate-x-0"
                  }`}
                >
                  {slideGroup.map((slide, idx) => (
                    <div
                      key={idx}
                      className="w-full flex items-center justify-evenly"
                    >
                      <Image
                        loading="lazy"
                        src={slide.img}
                        alt={`Seguros para ${slide.nombre}`}
                        width={130}
                        className="w-[90px] md:w-[130px] h-auto hover:shadow-md hover:scale-105 p-2 hover:rounded-lg hover:rotate-3 transition-transform duration-300 hover:cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              )
          )}
        </div>
        {/* <button
          className="absolute z-50 top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-primary text-white rounded-l focus:outline-none"
          onClick={prevSlide}
        >
          Prev
        </button>
        <button
          className="absolute z-50 top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-primary text-white rounded-r focus:outline-none"
          onClick={nextSlide}
        >
          Next
        </button> */}
      </div>
    </article>
  );
};

export default Carousel;
