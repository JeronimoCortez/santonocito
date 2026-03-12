"use client";

import { useState } from "react";

const specialties = [
  {
    id: 1,
    title: "Asesoramiento y representación",
    summary: "Asesoramos y representamos en conflictos civiles y comerciales.",
    details:
      "Analizamos cada caso, definimos la estrategia legal y acompañamos en mediaciones y procesos judiciales.",
    icon: "/asesoramiento.svg",
    iconClass: "relative w-[46.54px] h-[45.58px] shrink-0",
  },
  {
    id: 2,
    title: "Derecho Laboral",
    summary: "Defensa de trabajadores y empleadores en relaciones laborales.",
    details:
      "Asistencia en despidos, indemnizaciones, accidentes laborales y asesoramiento preventivo.",
    icon: "/derecho_laboral.svg",
    iconClass: "relative w-[51.14px] h-[41.09px] shrink-0",
  },
  {
    id: 3,
    title: "Accidentes de tránsito",
    summary: "Gestión integral de reclamos por siniestros viales.",
    details:
      "Reclamos a aseguradoras, daños materiales y lesiones con seguimiento personalizado.",
    icon: "/accidentes_transito.svg",
    iconClass: "relative w-[75px] h-[41.61px] shrink-0",
  },
  {
    id: 4,
    title: "Derecho Penal",
    summary: "Defensa técnica en causas penales y contravencionales.",
    details:
      "Asistencia desde la etapa inicial, declaraciones y seguimiento integral del proceso.",
    icon: "/derecho_penal.svg",
    iconClass: "relative w-[63.69px] h-[45.57px] shrink-0",
  },
];

export const SpecialtiesSection = () => {
  const [openIds, setOpenIds] = useState<Record<number, boolean>>({});

  const toggle = (id: number) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="relative flex w-full flex-col items-start gap-10 bg-[#ba95781a] px-6 py-16 sm:px-8 md:px-12 lg:px-24 lg:py-[100px] xl:flex-row xl:items-center xl:gap-4 xl:px-40">
      <div
        className="flex w-full flex-col items-start gap-6 lg:flex-1"
        data-reveal="fade-up"
      >
        <div className="self-stretch [font-family:'Gotham-Bold',Helvetica] font-bold text-variable-collection-color-princial-2 text-[32px] leading-[38px] md:text-[40px] md:leading-[48px] relative tracking-[0]">
          Nuestras especialidades
        </div>

        <p className="self-stretch [font-family:'Gotham-Book',Helvetica] font-normal text-textos-descriptivos text-lg leading-6 relative tracking-[0]">
          Acompañamos a personas y empresas en las siguientes áreas:
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:flex-1 xl:max-w-[748px]">
        {specialties.map((specialty) => {
          const isOpen = !!openIds[specialty.id];
          const detailsId = `specialty-details-${specialty.id}`;
          return (
            <div
              key={specialty.id}
              className="flex w-full"
              data-reveal="fade-up"
              style={{
                ["--reveal-delay" as string]: `${specialty.id * 120}ms`,
              }}
            >
              <div className="flex flex-1 items-start gap-4 p-[30px] bg-white border-b-4 [border-bottom-style:solid] border-variable-collection-color-princial-1 rounded-md">
                <div className="flex min-w-0 flex-1 flex-col items-start justify-center">
                  <div className="[font-family:'Gotham-Bold',Helvetica] font-bold text-variable-collection-color-princial-2 text-xl leading-7 tracking-[0]">
                    {specialty.title}
                  </div>
                  <button
                    type="button"
                    className="mt-2 w-fit [font-family:'Gotham-Light',Helvetica] text-sm font-light text-variable-collection-color-princial-2 underline-offset-4 hover:underline"
                    onClick={() => toggle(specialty.id)}
                    aria-expanded={isOpen}
                    aria-controls={detailsId}
                  >
                    {isOpen ? "Ver menos" : "Ver mas"}
                  </button>
                  <div
                    id={detailsId}
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="mt-2 text-sm text-[#5d4e49] leading-6">
                      {specialty.summary}
                    </p>
                    <p className="mt-2 text-sm text-[#1e1e1e] leading-6">
                      {specialty.details}
                    </p>
                  </div>
                </div>
                <img
                  className={specialty.iconClass}
                  alt={specialty.title}
                  src={specialty.icon}
                />
              </div>
            </div>
          );
        })}
      </div>

      <img
        className="absolute w-full left-0 bottom-0 h-px object-cover"
        alt="Vector"
        src="/vector-200-2.svg"
      />
    </div>
  );
};