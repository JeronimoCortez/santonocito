export const AboutUsSection = () => {
  return (
    <section
      id="quienes-somos"
      className="relative w-full scroll-mt-[90px] overflow-hidden px-6 py-12 sm:px-8 md:px-12 lg:px-24 xl:min-h-[802px] xl:px-40 xl:py-[60px]"
    >
      <div className="layout-container flex w-full flex-col items-center gap-10 xl:gap-[60px]">
      <div
        className="flex w-full flex-col items-center gap-6"
        data-reveal="fade-up"
      >
        <div className="self-stretch [font-family:'Gotham-Bold',Helvetica] font-bold text-[#5E4F4A] text-[32px] leading-[38px] md:text-[40px] md:leading-[48px] text-center relative tracking-[0]">
          Quienes somos
        </div>

        <div className="self-stretch [font-family:'Gotham-Book',Helvetica] font-normal text-black text-lg text-center leading-6 relative tracking-[0]">
          Conocé nuestra experiencia:
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-10 xl:min-h-[413px] xl:flex-row xl:gap-[60px]">
        <div
          className="flex flex-col items-center relative flex-1"
          data-reveal="fade-right"
        >
          <p className="self-stretch [font-family:'Gotham-Regular',Helvetica] font-normal text-[#1e1e1e] text-lg leading-[30px] relative tracking-[0]">
            <span className="[font-family:'Gotham-Regular',Helvetica] font-normal text-[#1e1e1e] text-lg tracking-[0] leading-[30px]">
              Somos un estudio jurídico con una trayectoria de{" "}
            </span>

            <span className="[font-family:'Gotham-Bold',Helvetica] font-bold">
              más 18 años
            </span>

            <span className="[font-family:'Gotham-Regular',Helvetica] font-normal text-[#1e1e1e] text-lg tracking-[0] leading-[30px]">
              {" "}
              integrado por los{" "}
            </span>

            <span className="[font-family:'Gotham-Bold',Helvetica] font-bold">
              doctores Maria Antonieta Santonocito y Juan Pablo Santonocito
            </span>

            <span className="[font-family:'Gotham-Regular',Helvetica] font-normal text-[#1e1e1e] text-lg tracking-[0] leading-[30px]">
              , dos hermanos y profesionales en el ejercicio de la abogacía que{" "}
            </span>

            <span className="[font-family:'Gotham-Bold',Helvetica] font-bold">
              combinamos la solidez del conocimiento jurídico con la cercanía de
              un equipo familiar.
            </span>
          </p>
        </div>

        <div
          className="flex flex-col items-start gap-6 relative flex-1"
          data-reveal="fade-left"
          style={{ ["--reveal-delay" as string]: "120ms" }}
        >
          <p className="w-full h-auto [font-family:'Gotham-Bold',Helvetica] font-bold text-[#5d4e49] text-base leading-6 whitespace-normal break-words relative tracking-[0]">
            Nuestra identidad se fundamenta en una premisa innegociable:
          </p>

          <p className="self-stretch [font-family:'Gotham-Regular',Helvetica] font-normal text-transparent text-[26px] leading-8 md:text-[32px] relative tracking-[0]">
            <span className="text-[#5d4e49] leading-[37px]">el </span>

            <span className="[font-family:'Gotham-Bold',Helvetica] font-bold text-[#ba9578] leading-[37px]">
              interés del cliente
            </span>

            <span className="text-[#5d4e49] leading-[37px]"> siempre </span>

            <span className="[font-family:'Gotham-Bold',Helvetica] font-bold text-[#ba9578] leading-[37px]">
              prevalece
            </span>

            <span className="text-[#5d4e49] leading-[37px]">
              {" "}
              sobre cualquier{" "}
            </span>

            <span className="[font-family:'Gotham-Bold',Helvetica] font-bold text-[#ba9578] leading-[37px]">
              beneficio personal
            </span>

            <span className="text-[#5d4e49] leading-[37px]">
              . <br />
            </span>

            <span className="text-[#1e1e1e] text-base leading-6">
              <br />
              Entendemos que detrás de cada expediente y consulta hay una
              persona, una familia o un proyecto de vida, es por ello, que
              abordamos cada caso con la máxima seriedad y responsabilidad,
              brindando un asesoramiento honesto y realista desde la primera
              consulta. <br />
              <br />
              Nos diferenciamos por hablar con la verdad: evitamos falsas
              expectativas para proteger integralmente a la persona, su entorno
              y su patrimonio, llevando tranquilidad y previsibilidad a quienes
              nos eligen.
            </span>
          </p>
        </div>
      </div>

      </div>
    </section>
  );
};
