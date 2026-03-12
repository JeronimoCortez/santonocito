const cards = [
  {
    icon: "/confianza.svg",
    iconAlt: "Group",
    iconClass: "relative w-[51.95px] h-[39.36px] ml-[-0.50px]",
    title: "Confianza y Compromiso",
    description:
      "Siempre con un principio: decir la verdad, actuar con responsabilidad y priorizar al cliente.",
  },
  {
    icon: "/trayectoria.svg",
    iconAlt: "Layer",
    iconClass: "relative w-[54px] h-[42px]",
    title: "Nuestra Reconocida Trayectoria",
    description:
      "Un estudio recomendado por la gente de Maipú, conocido por su cercanía y compromiso.",
  },
];

export const LegalConsultationSection = () => {
  return (
    <div className="relative flex w-full flex-col items-start gap-10 overflow-hidden px-6 py-12 sm:px-8 md:px-12 lg:px-24 lg:py-[60px] xl:min-h-[536px] xl:flex-row xl:items-center xl:justify-center xl:gap-24 2xl:gap-[203px] xl:px-40">
      <div
        className="flex w-full flex-col items-start gap-6 xl:w-[464px]"
        data-reveal="fade-up"
      >
        <p className="self-stretch [font-family:'Gotham-Bold',Helvetica] font-bold text-variable-collection-color-princial-2 text-[32px] leading-[38px] md:text-[40px] md:leading-[48px] relative tracking-[0]">
          <span className="text-[#5e4f4a]">Tu </span>
          <span className="text-[#b99578]">tranquilidad legal</span>
          <span className="text-[#5e4f4a]">
            {" "}
            empieza con una consulta honesta
          </span>
        </p>

        <p className="self-stretch [font-family:'Gotham-Book',Helvetica] font-normal text-textos-descriptivos text-lg leading-6 relative tracking-[0]">
          Desde 2007 acompañamos a personas, familias, emprendedores y empresas
          en la resolución de conflictos legales.
        </p>
      </div>

      <img
        className="absolute w-full left-0 bottom-0 h-px object-cover"
        alt="Vector"
        src="/image.svg"
      />

      <div className="flex w-full flex-col items-center justify-center gap-10 px-0 py-5 xl:flex-1">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex w-full items-center gap-10"
            data-reveal="fade-up"
            style={{ ["--reveal-delay" as string]: `${index * 120}ms` }}
          >
            <div className="items-center pl-[30px] pr-4 py-4 flex-1 grow border-l-4 [border-left-style:solid] border-variable-collection-color-princial-1 flex gap-4 relative rounded-md">
              <img
                className={card.iconClass}
                alt={card.iconAlt}
                src={card.icon}
              />
              <div className="flex flex-col items-start justify-center gap-2 relative flex-1 grow">
                <div className="self-stretch [font-family:'Gotham-Bold',Helvetica] font-bold text-[#5d4e49] text-xl leading-7 relative tracking-[0]">
                  {card.title}
                </div>
                <p className="[font-family:'Gotham-Book',Helvetica] font-normal text-[#1e1e1e] text-base relative self-stretch tracking-[0] leading-6">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
