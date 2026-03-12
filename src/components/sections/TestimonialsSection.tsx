"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    text:
      "Destacó la excelencia profesional de la Dra. Antonieta Santonocito y su compromiso en el abordaje de asuntos de familia. Actúa con gran eficacia, rapidez y de manera expeditiva, brindando explicaciones claras y precisas que generan confianza y tranquilidad. Su trato humano, empático y respetuoso, junto con una escucha atenta y sensible, marca una diferencia fundamental en momentos personales complejos. Asimismo, se caracteriza por su criterio justo y transparente en la determinación de honorarios. Una profesional íntegra y altamente recomendable.",
    author: "Laura Castro",
  },
  {
    id: 2,
    text:
      "Llegué a la doctora, a través de varias vías, ya que tanto una trabajadora social amiga me la sugirió, como así también la hija de otra amiga, a quien le había llevado su caso de familia, por lo que no dudé en contactarla. Tuve la bendición de encontrarme, no solo con una profesional afiladisima sobre derechos de la mujer y la protección de los niños, sino también con un ser humano que supo contenerme, motivarme y acompañarme en un proceso que para mí no era, ni fácil, ni simple, ni agradable, un divorcio y una división de bienes, fruto de una separación de más de 13 años sin acuerdos y que se resolvió en menos de un año. Mi eterna gratitud y mi super recomendación.",
    author: "Crsitina",
  },
  {
    id: 3,
    text:
      "Después de años de casada me tocó la triste realidad de muchas mujeres, que fue quedar viuda, y mi marido al tener hijos biológicos de antes de nuestra unión, comenzó mi realidad de tener que buscar una abogada que defendiera los bienes que habíamos adquirido juntos durante nuestro matrimonio. Fue un proceso legal largo, en el cual Antonieta estuvo ayudándome a sobrellevar todo esto que era nuevo y difícil para mí, ya que solo habían pasado unos meses de la partida de mi marido. Fueron varias las veces que tuvimos que mediar con las otras partes para llegar a un acuerdo, su apoyo en cuanto a lo emocional lo tengo que destacar, porque repito solo habían pasado unos meses desde que enviudé y el acompañamiento de Antonieta como mi abogada fue mi mejor elección, es por ella es que hoy tengo mi parte de la herencia que me correspondía y que me querían sacar. Mucho que agradecer y absolutamente nada que reprochar ya que fue mi abogada y por momentos una amiga que me aconsejo sin soltarme la mano.",
    author: "Carmen",
  },
];

export const TestimonialsSection = () => {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);

  useEffect(() => {
    if (!viewportRef.current) return;
    const element = viewportRef.current;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        setViewportWidth(entry.contentRect.width);
      }
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const peek = useMemo(() => {
    if (viewportWidth >= 1280) return 220;
    if (viewportWidth >= 1024) return 180;
    return 0;
  }, [viewportWidth]);

  const slideWidth = useMemo(() => {
    if (!viewportWidth) return 0;
    return Math.max(0, viewportWidth - peek);
  }, [viewportWidth, peek]);

  const maxIndex = testimonials.length - 1;

  const translateX = useMemo(() => {
    const base = activeIndex * slideWidth;
    return base - dragOffset;
  }, [activeIndex, slideWidth, dragOffset]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!slideWidth) return;
    setIsDragging(true);
    startXRef.current = event.clientX;
    setDragOffset(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const delta = event.clientX - startXRef.current;
    setDragOffset(delta);
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    event.currentTarget.releasePointerCapture(event.pointerId);
    const delta = event.clientX - startXRef.current;
    const threshold = Math.min(120, slideWidth * 0.2);

    if (delta < -threshold && activeIndex < maxIndex) {
      setActiveIndex(activeIndex + 1);
    } else if (delta > threshold && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  return (
    <section
      id="testimonios"
      className="relative flex w-full scroll-mt-[90px] flex-col items-center justify-center gap-10 overflow-hidden bg-cover bg-center px-6 py-12 sm:px-8 md:px-12 lg:min-h-[832px] lg:gap-[60px] lg:px-24 lg:py-[60px] xl:px-40"
      style={{ backgroundImage: "url('/testimonios-fondo.webp')" }}
    >
      <div className="absolute inset-0 bg-[#BA9578]/10" />

      <div
        className="relative z-10 flex w-full flex-col items-center gap-6"
        data-reveal="fade-up"
      >
        <p className="self-stretch [font-family:'Gotham-Bold',Helvetica] font-bold text-[#5E4F4A] text-[32px] leading-[38px] md:text-[40px] md:leading-[48px] text-center relative tracking-[0]">
          Lo que dicen nuestros clientes
        </p>
      </div>

      <div
        ref={viewportRef}
        className={`relative z-10 w-full overflow-hidden select-none touch-pan-y ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        data-reveal="fade-up"
        style={{ ["--reveal-delay" as string]: "120ms" }}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${translateX}px)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex shrink-0 justify-center lg:justify-start"
              style={{ width: slideWidth || "100%" }}
            >
              <div className="flex h-auto w-[85vw] flex-col items-center justify-center gap-2.5 rounded-[10px] bg-white sm:w-[540px] lg:min-h-[535px] lg:w-full xl:w-[835px]">
                <div className="w-full max-w-[735px] mt-[-1.00px] [font-family:'Gotham-Bold',Helvetica] font-bold text-[#5d4e49] text-7xl md:text-9xl leading-7 relative tracking-[0]">
                  &quot;
                </div>

                <div className="items-center px-6 sm:px-[50px] py-4 self-stretch w-full flex-[0_0_auto] flex gap-4 relative rounded-md">
                  <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                    <p className="mt-[-1.00px] [font-family:'Gotham-Book',Helvetica] font-normal text-[#1e1e1e] text-base relative self-stretch tracking-[0] leading-6">
                      {testimonial.text}
                    </p>
                  </div>
                </div>

                <div className="h-10 items-center justify-center px-10 py-4 self-stretch w-full flex gap-4 relative rounded-md">
                  <div className="flex-col items-center justify-center gap-2 mt-[-8.00px] mb-[-8.00px] flex relative flex-1 grow">
                    <div className="mt-[-1.00px] [font-family:'Gotham-Bold',Helvetica] font-bold text-[#5e4f4a] text-lg relative self-stretch tracking-[0] leading-6">
                      {testimonial.author}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative z-10 flex items-center justify-center gap-3"
        data-reveal="fade-up"
        style={{ ["--reveal-delay" as string]: "200ms" }}
      >
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded ${
              index === activeIndex
                ? "bg-[#5d4e49]"
                : "border border-solid border-[#5e4f4a]"
            }`}
            aria-label={`Ir al testimonio ${index + 1}`}
          />
        ))}
      </div>

      <img
        className="absolute z-10 w-full left-0 bottom-0 h-px object-cover"
        alt="Vector"
        src="/vector-200-5.svg"
      />
    </section>
  );
};
