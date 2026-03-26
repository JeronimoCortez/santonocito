const features = [
  {
    icon: "/atencion.svg",
    alt: "Atención personalizada logo",
    title: "Atención personalizada",
    description: "Honestidad y transparencia en cada caso.",
    iconSize: "w-[38px] h-[24px] sm:w-[55px] sm:h-[32px]",
  },
  {
    icon: "/experiencia.svg",
    alt: "Experiencia comprobada logo",
    title: "Experiencia comprobada",
    description:
      "Nunca priorizamos intereses personales sobre los del cliente.",
    iconSize: "w-[40px] h-[30px] sm:w-[52px] sm:h-[40px]",
  },
  {
    icon: "/acompañamiento.svg",
    alt: "Acompañamiento logo",
    title: "Acompañamiento humano y profesional",
    description: "Estamos aquí para ayudarte.",
    iconSize: "w-[44px] h-[30px] sm:w-[58px] sm:h-[40px]",
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section
      id="por-que"
      className="relative flex w-full scroll-mt-[90px] items-center justify-center overflow-hidden bg-[#faf8f7] px-6 py-12 sm:px-8 md:px-12 lg:min-h-[614px] lg:px-24 lg:py-[60px] xl:px-40"
    >
      <div className="layout-container flex w-full flex-col items-center justify-center gap-10 lg:gap-[60px]">
      <div
        className="flex w-full flex-col items-center gap-6"
        data-reveal="fade-up"
      >
        <div className="self-stretch [font-family:'Gotham-Bold',Helvetica] font-bold text-[#5E4F4A] text-[32px] leading-[38px] md:text-[40px] md:leading-[48px] text-center relative tracking-[0]">
          ¿Por qué elegirnos?
        </div>

        <div className="self-stretch [font-family:'Gotham-Book',Helvetica] font-normal text-black text-base text-center leading-6 relative tracking-[0]">
          Conocé nuestros diferenciales:
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-12 px-0 py-5 lg:flex-row lg:justify-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex w-full items-center gap-10 lg:w-[calc(50%-1rem)] xl:w-[calc(33%-1rem)]"
            data-reveal="fade-up"
            style={{ ["--reveal-delay" as string]: `${index * 120}ms` }}
          >
            <div className="items-center p-4 w-full flex gap-4 relative rounded-md">
              <div className="relative flex items-center justify-center w-16 h-16 sm:w-[100px] sm:h-[100px] shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#BA9578]" />
                <img
                  className={`relative ${feature.iconSize}`}
                  alt={feature.alt}
                  src={feature.icon}
                />
              </div>

              <div className="flex flex-col items-start gap-2 relative flex-1">
                <div className="self-stretch [font-family:'Gotham-Bold',Helvetica] font-bold text-[#5d4e49] text-xl leading-7 tracking-[0]">
                  {feature.title}
                </div>
                <div className="[font-family:'Gotham-Book',Helvetica] font-normal text-[#1e1e1e] text-md self-stretch tracking-[0] leading-6">
                  {feature.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};
