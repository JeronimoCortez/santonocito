export const HeroSection = () => {
  return (
    <header
      id="inicio"
      className="relative flex w-full scroll-mt-[90px] flex-col items-center justify-center gap-6 overflow-hidden px-6 py-10 text-center sm:px-8 md:min-h-[488px] md:flex-row md:items-center md:justify-center md:gap-[60px] md:px-12 md:py-[60px] md:text-left lg:px-24 xl:px-40"
    >
      <div className="absolute inset-0 bg-[url('/hero.webp')] bg-cover bg-center opacity-40" />
      <div className="absolute inset-0 bg-black/60" />
      <div
        className="relative z-10 flex w-full flex-col items-center gap-6 md:flex-1 md:items-start"
        data-reveal="fade-up"
      >
        <p className="self-stretch [font-family:'Gotham-Regular',Helvetica] font-normal text-white text-[30px] leading-[36px] sm:text-[32px] sm:leading-[38px] md:text-[40px] md:leading-[48px] relative tracking-[0]">
          <span className="[font-family:'Gotham-Regular',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[38px] md:text-[40px] md:leading-[48px]">
            Bienvenido a<br />
          </span>

          <span className="[font-family:'Gotham-Bold',Helvetica] font-bold">
            Santonocito &amp; Asociados
          </span>
        </p>

        <p className="self-stretch [font-family:'Gotham-Book',Helvetica] font-normal text-white text-base leading-6 relative tracking-[0]">
          Estudio Jurídico en Maipú con 18 años de trayectoria.
        </p>

        <button className="all-[unset] box-border inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
          <div className="flex flex-col items-center justify-center px-[30px] py-3 relative self-stretch w-full flex-[0_0_auto] bg-[#B99578] rounded-lg">
            <div className="w-fit mt-[-1.00px] [font-family:'Gotham-Book',Helvetica] font-normal text-white text-base leading-6 whitespace-normal text-center relative tracking-[0]">
              Solicitá tu consulta hoy
            </div>
          </div>
        </button>
      </div>


    </header>
  );
};
