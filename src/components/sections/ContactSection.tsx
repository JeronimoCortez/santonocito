export const ContactSection = () => {
  return (
    <section
      id="contacto"
      className="relative w-full scroll-mt-[90px] overflow-hidden bg-black/70 px-6 py-12 sm:px-8 md:px-12 lg:px-24 lg:py-[60px] xl:px-40"
    >
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/contacto.webp')" }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
        <div
          className="flex w-full flex-col gap-6"
          data-reveal="fade-up"
        >
          <div className="flex flex-col gap-2">
            <h2 className="text-[28px] font-semibold text-[#caa081] sm:text-[32px]">
              Contactanos
            </h2>
            <p className="text-sm text-white/80">Estamos para ayudarte</p>
          </div>

          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#caa081] px-6 py-3 text-sm font-medium text-white sm:w-fit">
            Contactanos por Whatsapp
          </button>

          <div className="w-full max-w-[460px] overflow-hidden rounded-2xl bg-white/10 p-3 shadow-soft">
            <div className="aspect-[4/3] w-full rounded-xl bg-white/80">
              <div className="flex h-full w-full items-center justify-center text-xs text-black/60">
                Google Maps iframe
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full rounded-2xl bg-white/20 p-6 backdrop-blur-md md:p-8"
          data-reveal="fade-up"
          style={{ ["--reveal-delay" as string]: "120ms" }}
        >
          <form className="flex flex-col gap-4">
            <label className="text-xs text-white/80">
              Nombre
              <input
                className="mt-2 w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/60 focus:border-white focus:outline-none"
                placeholder="Su nombre"
                type="text"
              />
            </label>

            <label className="text-xs text-white/80">
              Apellido
              <input
                className="mt-2 w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/60 focus:border-white focus:outline-none"
                placeholder="Su apellido"
                type="text"
              />
            </label>

            <label className="text-xs text-white/80">
              Email
              <input
                className="mt-2 w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/60 focus:border-white focus:outline-none"
                placeholder="Su dirección de email"
                type="email"
              />
            </label>

            <div className="grid gap-3 sm:grid-cols-[120px_1fr]">
              <label className="text-xs text-white/80">
                Código
                <select className="mt-2 w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white focus:border-white focus:outline-none">
                  <option className="text-black" value="+54-261">
                    +54 9 261
                  </option>
                </select>
              </label>

              <label className="text-xs text-white/80">
                Teléfono
                <input
                  className="mt-2 w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/60 focus:border-white focus:outline-none"
                  placeholder="Número de teléfono"
                  type="tel"
                />
              </label>
            </div>

            <label className="text-xs text-white/80">
              Mensaje
              <textarea
                className="mt-2 min-h-[120px] w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/60 focus:border-white focus:outline-none"
                placeholder="Escriba su consulta aquí..."
              />
            </label>

            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-[#caa081] px-6 py-3 text-sm font-medium text-white"
            >
              Enviar consulta
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
