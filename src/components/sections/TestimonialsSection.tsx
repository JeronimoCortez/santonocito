"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "Destacó la excelencia profesional de la Dra. Antonieta Santonocito y su compromiso en el abordaje de asuntos de familia. Actúa con gran eficacia, rapidez y de manera expeditiva, brindando explicaciones claras y precisas que generan confianza y tranquilidad. Su trato humano, empático y respetuoso, junto con una escucha atenta y sensible, marca una diferencia fundamental en momentos personales complejos. Asimismo, se caracteriza por su criterio justo y transparente en la determinación de honorarios. Una profesional íntegra y altamente recomendable.",
    author: "Laura Castro",
  },
  {
    id: 2,
    text: "Llegué a la doctora, a través de varias vías, ya que tanto una trabajadora social amiga me la sugirió, como así también la hija de otra amiga, a quien le había llevado su caso de familia, por lo que no dudé en contactarla. Tuve la bendición de encontrarme, no solo con una profesional afiladisima sobre derechos de la mujer y la protección de los niños, sino también con un ser humano que supo contenerme, motivarme y acompañarme en un proceso que para mí no era, ni fácil, ni simple, ni agradable, un divorcio y una división de bienes, fruto de una separación de más de 13 años sin acuerdos y que se resolvió en menos de un año. Mi eterna gratitud y mi super recomendación.",
    author: "Cristina",
  },
  {
    id: 3,
    text: "Después de años de casada me tocó la triste realidad de muchas mujeres, que fue quedar viuda, y mi marido al tener hijos biológicos de antes de nuestra unión, comenzó mi realidad de tener que buscar una abogada que defendiera los bienes que habíamos adquirido juntos durante nuestro matrimonio. Fue un proceso legal largo, en el cual Antonieta estuvo ayudándome a sobrellevar todo esto que era nuevo y difícil para mí, ya que solo habían pasado unos meses de la partida de mi marido. Fueron varias las veces que tuvimos que mediar con las otras partes para llegar a un acuerdo, su apoyo en cuanto a lo emocional lo tengo que destacar, porque repito solo habían pasado unos meses desde que enviudé y el acompañamiento de Antonieta como mi abogada fue mi mejor elección, es por ella es que hoy tengo mi parte de la herencia que me correspondía y que me querían sacar. Mucho que agradecer y absolutamente nada que reprochar ya que fue mi abogada y por momentos una amiga que me aconsejo sin soltarme la mano.",
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
  const startYRef = useRef(0);

  /**
   * FIX CARRUSEL MOBILE — problema raíz:
   * El elemento tenía `touch-pan-y` en Tailwind, lo que debería permitir scroll vertical
   * y entregar el horizontal al componente, pero el uso de onPointerDown/Move/Up
   * en combinación con setPointerCapture() interfería con el scroll nativo del navegador
   * en iOS/Android, haciendo que los gestos se cancelaran o no se registraran.
   *
   * Solución: se reemplaza el sistema de Pointer Events por Touch Events nativos
   * (onTouchStart / onTouchMove / onTouchEnd). Esto da control total sobre el gesto
   * horizontal sin interferir con el scroll vertical del navegador.
   * Se elimina también el cursor-grab ya que no aplica en touch.
   */

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

  // ── Touch handlers (mobile) ──────────────────────────────────────────────────

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!slideWidth) return;
    const touch = e.touches[0];
    startXRef.current = touch.clientX;
    startYRef.current = touch.clientY;
    setDragOffset(0);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - startXRef.current;
    const deltaY = touch.clientY - startYRef.current;

    // Si el gesto es predominantemente vertical, no interceptamos (dejamos scroll).
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      setIsDragging(false);
      setDragOffset(0);
      return;
    }

    // Gesto horizontal confirmado: prevenimos el scroll de la página.
    e.preventDefault();
    setDragOffset(deltaX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const touch = e.changedTouches[0];
    const delta = touch.clientX - startXRef.current;
    const threshold = Math.min(60, slideWidth * 0.15); // umbral más pequeño en touch

    if (delta < -threshold && activeIndex < maxIndex) {
      setActiveIndex((i) => i + 1);
    } else if (delta > threshold && activeIndex > 0) {
      setActiveIndex((i) => i - 1);
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  // ── Pointer handlers (desktop) ───────────────────────────────────────────────

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Solo activar con mouse (no touch — lo maneja el bloque anterior)
    if (e.pointerType === "touch") return;
    if (!slideWidth) return;
    setIsDragging(true);
    startXRef.current = e.clientX;
    setDragOffset(0);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch" || !isDragging) return;
    const delta = e.clientX - startXRef.current;
    setDragOffset(delta);
  };

  const endPointerDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch" || !isDragging) return;
    e.currentTarget.releasePointerCapture(e.pointerId);
    const delta = e.clientX - startXRef.current;
    const threshold = Math.min(120, slideWidth * 0.2);

    if (delta < -threshold && activeIndex < maxIndex) {
      setActiveIndex((i) => i + 1);
    } else if (delta > threshold && activeIndex > 0) {
      setActiveIndex((i) => i - 1);
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

      {/*
       * FIX CARRUSEL MOBILE:
       * - Se agrega `touch-action: pan-y` vía style inline para que el navegador
       *   solo tome control del scroll vertical; el horizontal lo interceptamos nosotros.
       * - Se añaden los handlers onTouchStart/Move/End para gestos táctiles.
       * - Se mantienen los handlers de Pointer para mouse (desktop).
       * - Se eliminó cursor-grab en mobile (sin efecto en táctil y evita bugs en iOS).
       */}
      <div
        ref={viewportRef}
        className={`relative z-10 w-full overflow-hidden select-none ${
          isDragging ? "cursor-grabbing" : "lg:cursor-grab"
        }`}
        style={{ touchAction: "pan-y" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endPointerDrag}
        onPointerCancel={endPointerDrag}
        data-reveal="fade-up"
        // style={{ ["--reveal-delay" as string]: "120ms", touchAction: "pan-y" }}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(-${translateX}px)`,
            // Desactivar transición durante el arrastre para seguir el dedo sin lag
            transition: isDragging ? "none" : "transform 500ms ease-in-out",
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex shrink-0 justify-center lg:justify-start"
              style={{ width: slideWidth || "100%" }}
            >
               <div className="flex h-auto w-[92vw] flex-col items-center justify-center gap-2.5 rounded-[10px] bg-white sm:w-[560px] lg:min-h-[535px] lg:w-full xl:w-[95%]">
                <div className="w-full px-6 sm:px-[50px] mt-[-1.00px] pt-6">
                  <img
                    src="/comillas.webp"
                    alt="Comillas"
                    className="h-10 w-auto sm:h-12 md:h-16 lg:h-20"
                  />
                </div>

                <div className="items-center px-6 sm:px-[50px] py-4 self-stretch w-full flex-[0_0_auto] flex gap-4 relative rounded-md">
                  <div className="flex flex-col items-start gap-2 relative flex-1 grow">
                    <p className="mt-[-1.00px] [font-family:'Gotham-Book',Helvetica] font-normal text-[#1e1e1e] text-[15px] sm:text-base relative self-stretch tracking-[0] leading-6">
                      {testimonial.text}
                    </p>
                  </div>
                </div>

                <div className="h-10 items-center justify-center px-6 sm:px-[50px] sm:px-10 py-4 self-stretch w-full flex gap-4 relative rounded-md mb-2">
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
            className={`w-2.5 h-2.5 rounded transition-colors duration-300 ${
              index === activeIndex
                ? "bg-[#5d4e49]"
                : "border border-solid border-[#5e4f4a]"
            }`}
            aria-label={`Ir al testimonio ${index + 1}`}
          />
        ))}
      </div>


    </section>
  );
};
