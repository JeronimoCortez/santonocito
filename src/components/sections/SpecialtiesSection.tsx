"use client";

import { Fragment, useState } from "react";

const specialties = [
  {
    id: 1,
    title: "Asesoramiento y representación",
    summary: "Asesoramos y representamos en conflictos civiles y comerciales.",
    details:
      `Asesoramiento para adelanto de herencia, testamento o acción de última voluntad. 
        Constitución de Fideicomiso para proyectos u obras, limitando tu responsabilidad. 
        Asesoramiento jurídico por consecuencias de contratos de alquiler. 
        Proceso de Desalojo y Procesos monitorios (ejecucuciones).`,
    icon: "/asesoramiento.svg",
    iconClass: "relative w-[46.54px] h-[45.58px] shrink-0",
  },
  {
    id: 2,
    title: "Derecho Laboral",
    summary: "Defensa de trabajadores y empleadores en relaciones laborales.",
    details:
      `Ofrecemos asesoramiento y defensa en derecho laboral, tanto para trabajadores como para empleadores, en despidos, indemnizaciones y conflictos laborales.<br> Realización de liquidaciones finales basados en CCT para trabajadores registrados como para no registrados, realización de Acuerdos espontáneos y OCL frente a subsecretaria de trabajo. Accidentes de trabajo y reclamos a ART`,
    icon: "/derecho_laboral.svg",
    iconClass: "relative w-[51.14px] h-[41.09px] shrink-0",
  },
  {
    id: 3,
    title: "Accidentes de tránsito",
    summary: "Gestión integral de reclamos por siniestros viales.",
    details:
      `Asesoramiento en accidentes de transito, analizando responsabilidades de partes, controlando estado de cobertura de seguro, confección de acuerdo entre partes, reclamos extrajudiciales y judiciales por daños materiales, lesiones, incapacidad, daño psicológico y económico buscando lograr una indemnización justa e integral.`,
    icon: "/accidentes_transito.svg",
    iconClass: "relative w-[75px] h-[41.61px] shrink-0",
  },
  {
    id: 4,
    title: "Derecho Penal",
    summary: "Defensa técnica en causas penales y contravencionales.",
    details:
      `Asesoramiento y representación en procesos Penales; Medidas de protección especialmente violencia de género y delitos contra la integridad Sexual (prohibición de acercamiento, exclusión de hogar, entre otros); Medidas Patrimoniales (embargo preventivo e inhibición general de bienes) y Medidas de coerción personal (Cese de prisión preventiva, la prohibición de salir del país, controles Jurisdiccionales, obligación de presentarse ante la autoridad). Procedimientos Especiales: Flagrancia; Juicio Abreviado; Asesoramiento, asistencia y elaboración de querellas penales; Calumnias e injurias y Justicia Penal Juvenil.`,
    icon: "/derecho_penal.svg",
    iconClass: "relative w-[63.69px] h-[45.57px] shrink-0",
  },
];

const renderMultilineText = (text: string) => {
  const normalized = text
    .replace(/\r\n/g, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n[ \t]*\n+/g, "\n");

  const lines = normalized.split("\n");

  return lines.map((line, index) => (
    <Fragment key={index}>
      {line}
      {index < lines.length - 1 ? <br /> : null}
    </Fragment>
  ));
};

export const SpecialtiesSection = () => {
  const [openIds, setOpenIds] = useState<Record<number, boolean>>({});

  const toggle = (id: number) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="especialidades"
      className="relative w-full scroll-mt-[90px] bg-[#ba95781a] px-6 py-16 sm:px-8 md:px-12 lg:px-24 lg:py-[100px] xl:px-40"
    >
      <div className="layout-container flex w-full flex-col items-start gap-10 xl:flex-row xl:items-center xl:gap-4 2xl:gap-8">
        <div
          className="flex max-w-[400px] flex-col items-start gap-6 lg:flex-1"
          data-reveal="fade-up"
        >
          <div className="self-stretch [font-family:'Gotham-Bold',Helvetica] font-bold text-[#5E4F4A] text-[32px] leading-[38px] md:text-[40px] md:leading-[48px] relative tracking-[0]">
            Nuestras especialidades
          </div>

          <p className="self-stretch [font-family:'Gotham-Book',Helvetica] font-normal text-[#444444] text-lg leading-6 relative tracking-[0]">
            Acompañamos a personas y empresas en las siguientes áreas:
          </p>
        </div>

        <div className="grid w-full grid-cols-1 items-start gap-6 sm:gap-8 md:grid-cols-2 xl:flex-1 ">
          {specialties.map((specialty) => {
            const isOpen = !!openIds[specialty.id];
            const detailsId = `specialty-details-${specialty.id}`;
            return (
              <div
                key={specialty.id}
                className="w-full self-start"
                data-reveal="fade-up"
                style={{
                  ["--reveal-delay" as string]: `${specialty.id * 120}ms`,
                }}
              >
                <div
                  className={`flex w-full flex-col rounded-md border-b-4 [border-bottom-style:solid] border-[#B99578] bg-white ${
                    isOpen ? "px-10 py-12" : "min-h-[150px] justify-center px-6 py-5"
                  }`}
                >
                  <div
                    className={`flex w-full gap-4 ${
                      isOpen ? "items-center gap-6" : "items-center"
                    }`}
                  >
                    <div className="flex min-w-0 flex-1 flex-col items-start">
                      <div
                        className="[font-family:'Gotham-Bold',Helvetica] text-xl font-bold leading-6 tracking-[0] text-[#5E4F4A]"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                    >
                        {renderMultilineText(specialty.title)}
                      </div>

                      <button
                        type="button"
                        className={`mt-2 w-fit [font-family:'Gotham-Light',Helvetica] text-sm font-light leading-5 text-[#8C8C8C] hover:text-[#5E4F4A] ${
                          isOpen ? "hidden" : ""
                        }`}
                        onClick={() => toggle(specialty.id)}
                        aria-expanded={isOpen}
                        aria-controls={detailsId}
                      >
                        {isOpen ? "Ver menos" : "Ver más"}
                      </button>
                    </div>
                    <img
                      className={specialty.iconClass}
                      alt={specialty.title}
                      src={specialty.icon}
                    />
                  </div>

                  <div
                    id={detailsId}
                    className={`flex w-full flex-col overflow-hidden transition-all duration-300 ease-out ${
                      isOpen
                        ? "mt-3 max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-[#444444] leading-6 tracking-[-0.03em] my-2">
                      {renderMultilineText(specialty.details)}
                    </p>

                    {isOpen && (
                      <button
                        type="button"
                        className="mt-4 w-fit self-end [font-family:'Gotham-Light',Helvetica] text-sm font-light leading-5 text-[#8C8C8C] hover:text-[#5E4F4A]"
                        onClick={() => toggle(specialty.id)}
                        aria-expanded={isOpen}
                        aria-controls={detailsId}
                      >
                        Ver menos
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
