"use client";
import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";

type CarouseProps = {
  data: { img: StaticImageData; nombre: string; slug: string }[];
  cantItems: number;
  title: string;
  background?: string;
};

const Carousel = ({ data, cantItems, title }: CarouseProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [itemsPerSlide, setItemsPerSlide] = useState(cantItems);

  // If is mobile just show 1 slide
  useEffect(() => {
    if (window.innerWidth < 768) {
      setItemsPerSlide(1);
    } else {
      setItemsPerSlide(cantItems);
    }
  }, [cantItems]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === Math.ceil(data.length / itemsPerSlide) - 1
        ? 0
        : prevSlide + 1
    );
  }, [data, itemsPerSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0
        ? Math.ceil(data.length / itemsPerSlide) - 1
        : prevSlide - 1
    );
  };

  // Agrupar los elementos en grupos de itemsPerSlide
  const slidesToShow = [];
  for (let i = 0; i < data.length; i += itemsPerSlide) {
    slidesToShow.push(data.slice(i, i + itemsPerSlide));
  }

  return (
    <article className="max-w-[1200px] mx-auto my-8">
      <h2 className="text-[2rem] font-bold text-center">{title}</h2>
      <div className="relative h-fit py-4">
        <div className="overflow-hidden w-full h-40">
          {slidesToShow.map((slideGroup, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 z-[40] w-full h-full flex items-center transition-transform ease-in-out duration-300 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                visibility: index === currentSlide ? "visible" : "hidden",
                position: index === currentSlide ? "relative" : "absolute",
              }}
            >
              {slideGroup.map((slide, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-full h-[140px] flex flex-col items-center justify-between"
                  >
                    <a href={`/${slide.slug}`}>
                      <Image
                        loading="lazy"
                        src={slide.img}
                        alt={`Seguros para ${slide.nombre}`}
                        width={130}
                        className="w-[90px] md:w-[130px] h-auto hover:cursor-pointer"
                      />
                    </a>
                    <h3 className="font-bold">{slide.nombre}</h3>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Carousel;
