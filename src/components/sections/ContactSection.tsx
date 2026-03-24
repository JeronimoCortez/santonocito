'use client';

import type { FormEvent } from "react";

const COUNTRY_CODES = [
  { code: "+54", label: "🇦🇷 +54" },
  { code: "+591", label: "🇧🇴 +591" },
  { code: "+55", label: "🇧🇷 +55" },
  { code: "+56", label: "🇨🇱 +56" },
  { code: "+57", label: "🇨🇴 +57" },
  { code: "+506", label: "🇨🇷 +506" },
  { code: "+53", label: "🇨🇺 +53" },
  { code: "+593", label: "🇪🇨 +593" },
  { code: "+503", label: "🇸🇻 +503" },
  { code: "+502", label: "🇬🇹 +502" },
  { code: "+509", label: "🇭🇹 +509" },
  { code: "+504", label: "🇭🇳 +504" },
  { code: "+52", label: "🇲🇽 +52" },
  { code: "+505", label: "🇳🇮 +505" },
  { code: "+507", label: "🇵🇦 +507" },
  { code: "+595", label: "🇵🇾 +595" },
  { code: "+51", label: "🇵🇪 +51" },
  { code: "+1787", label: "🇵🇷 +1787" },
  { code: "+1809", label: "🇩🇴 +1809" },
  { code: "+598", label: "🇺🇾 +598" },
  { code: "+58", label: "🇻🇪 +58" },
  { code: "+34", label: "🇪🇸 +34" },
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+33", label: "🇫🇷 +33" },
  { code: "+49", label: "🇩🇪 +49" },
  { code: "+39", label: "🇮🇹 +39" },
  { code: "+351", label: "🇵🇹 +351" },
  { code: "+61", label: "🇦🇺 +61" },
  { code: "+81", label: "🇯🇵 +81" },
  { code: "+86", label: "🇨🇳 +86" },
  { code: "+91", label: "🇮🇳 +91" },
  { code: "+7", label: "🇷🇺 +7" },
  { code: "+27", label: "🇿🇦 +27" },
  { code: "+234", label: "🇳🇬 +234" },
  { code: "+20", label: "🇪🇬 +20" },
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+966", label: "🇸🇦 +966" },
  { code: "+82", label: "🇰🇷 +82" },
  { code: "+62", label: "🇮🇩 +62" },
  { code: "+60", label: "🇲🇾 +60" },
  { code: "+63", label: "🇵🇭 +63" },
  { code: "+65", label: "🇸🇬 +65" },
  { code: "+66", label: "🇹🇭 +66" },
  { code: "+84", label: "🇻🇳 +84" },
  { code: "+212", label: "🇲🇦 +212" },
  { code: "+213", label: "🇩🇿 +213" },
  { code: "+216", label: "🇹🇳 +216" },
  { code: "+380", label: "🇺🇦 +380" },
  { code: "+48", label: "🇵🇱 +48" },
  { code: "+31", label: "🇳🇱 +31" },
  { code: "+32", label: "🇧🇪 +32" },
  { code: "+41", label: "🇨🇭 +41" },
  { code: "+43", label: "🇦🇹 +43" },
  { code: "+46", label: "🇸🇪 +46" },
  { code: "+47", label: "🇳🇴 +47" },
  { code: "+45", label: "🇩🇰 +45" },
  { code: "+358", label: "🇫🇮 +358" },
];

export const ContactSection = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const form = e.currentTarget;

  const data = {
    nombre: (form.nombre as HTMLInputElement).value,
    apellido: (form.apellido as HTMLInputElement).value,
    email: (form.email as HTMLInputElement).value,
    codigo: (form.codigo as HTMLSelectElement).value,
    telefono: (form.telefono as HTMLInputElement).value,
    mensaje: (form.mensaje as HTMLTextAreaElement).value,
  };

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    console.log("Consulta enviada correctamente");
    form.reset();
  } else {
    console.log("Error al enviar la consulta");
  }
};


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
        <div className="flex w-full flex-col gap-6" data-reveal="fade-up">
          <div className="flex flex-col gap-2">
            <h2 className="text-[28px] font-semibold text-[#caa081] sm:text-[32px]">
              Contactanos
            </h2>
            <p className="text-sm text-white">Estamos para ayudarte</p>
          </div>

          <a
            href="https://wa.me/5492615325937?text=Hola!%20Santonocito%20y%20Asociados,%20necesito%20consultarles%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#caa081] px-6 py-3 text-sm font-medium text-white sm:w-fit"
          >
            <img
              src="/whatsapp.svg"
              alt=""
              aria-hidden="true"
              className="h-5 w-5 brightness-0 invert"
            />
            Contactanos por Whatsapp
          </a>

          <div className="w-full max-w-[460px] overflow-hidden rounded-2xl bg-white/10 ">
            <div className="aspect-[4/3] w-full rounded-xl bg-white/80">
              <div className="flex h-full w-full items-center justify-center text-xs text-black/60">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3346.52461439549!2d-68.79232569999999!3d-32.9899418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0cb9f2dcf31b%3A0x85f0d75aa6a8e1f6!2sOzamis%20467%2C%20Maip%C3%BA%2C%20Mendoza!5e0!3m2!1ses!2sar!4v1773703699576!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  className="border:0;"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full rounded-2xl bg-white/20 p-6 backdrop-blur-md md:p-8"
          data-reveal="fade-up"
          style={{ ["--reveal-delay" as string]: "120ms" }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="text-xs text-white/80">
              Nombre
              <input
                className="mt-2 w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/60 focus:border-white focus:outline-none"
                placeholder="Su nombre"
                type="text"
                name="nombre"
              />
            </label>

            <label className="text-xs text-white/80">
              Apellido
              <input
                className="mt-2 w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/60 focus:border-white focus:outline-none"
                placeholder="Su apellido"
                type="text"
                name="apellido"
              />
            </label>

            <label className="text-xs text-white/80">
              Email
              <input
                className="mt-2 w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/60 focus:border-white focus:outline-none"
                placeholder="Su dirección de email"
                type="email"
                name="email"
              />
            </label>

            <div className="grid gap-3 sm:grid-cols-[120px_1fr]">
              <label className="text-xs text-white/80">
                Código
                <select
                  defaultValue="+54"
                  className="mt-2 w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white focus:border-white focus:outline-none"
                  name="codigo"
                >
                  {COUNTRY_CODES.map(({ code, label }) => (
                    <option key={code} className="text-black" value={code}>
                      {label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-xs text-white/80">
                Teléfono
                <input
                  className="mt-2 w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/60 focus:border-white focus:outline-none"
                  placeholder="Número de teléfono"
                  type="tel"
                  name="telefono"
                />
              </label>
            </div>

            <label className="text-xs text-white/80">
              Mensaje
              <textarea
                className="mt-2 min-h-[120px] w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/60 focus:border-white focus:outline-none"
                placeholder="Escriba su consulta aquí..."
                name="mensaje"
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
