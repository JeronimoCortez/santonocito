import { AboutUsSection } from "./sections/AboutUsSection";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { LegalConsultationSection } from "./sections/LegalConsultationSection";
import { NavigationMenuSection } from "./NavigationMenuSection";
import { SpecialtiesSection } from "./sections/SpecialtiesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { WhyChooseUsSection } from "./sections/WhyChooseUsSection";
import { ScrollAnimator } from "./ScrollAnimator";

export const Contenedor = () => {
  return (
    <div className="w-full min-w-0 bg-white">
      <ScrollAnimator />
      <div className="relative flex w-full flex-col items-center bg-white pt-[72px] md:pt-[67px]">
        <HeroSection />
        <LegalConsultationSection />
        <SpecialtiesSection />
        <AboutUsSection />
        <img
          className="relative self-stretch w-full h-[320px] sm:h-[480px] lg:h-[776px] object-cover"
          alt="Image"
          src="/imagen_estudio_juridico.webp"
          data-reveal="scale"
        />

        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactSection />

        <footer
          className="relative w-full bg-transparent px-6 py-8 sm:px-8 md:px-12 md:py-10 lg:px-24 lg:py-[60px] xl:px-40"
          data-reveal="fade-up"
        >
          <div className="mx-auto flex w-full max-w-[var(--layout-max)] flex-wrap items-center justify-center gap-4 lg:flex-nowrap lg:gap-5">
            <p className="flex items-center justify-center w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-variable-collection-color-princial-2 text-sm text-center leading-7 whitespace-normal break-words relative tracking-[0]">
              © 2023 Santonocito &amp; Asociados
            </p>

            <div className="flex w-full md:w-[293px] items-center justify-center gap-2.5 relative">
              <svg
                className="h-4 w-4 shrink-0 text-variable-collection-color-princial-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 22s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>

              <p className="flex items-center w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-variable-collection-color-princial-2 text-sm leading-7 whitespace-normal break-words relative tracking-[0]">
                Ozamis Centro 467 · Maipú · Mendoza
              </p>
            </div>

            <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
              <div className="w-3.5 h-[13.99px] relative bg-[url(/vector-2.svg)] bg-[100%_100%] flex items-center justify-center">
                <img
                  className="w-[70%] h-[70%]"
                  alt="Vector"
                  src="/whatsapp.svg"
                />
              </div>

              <p className="flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-variable-collection-color-princial-2 text-sm text-center leading-7 whitespace-normal break-words relative tracking-[0]">
                +54 9 2615 325937 / +54 9 2615 53-1704
              </p>
            </div>

            <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
              <svg
                className="h-4 w-4 shrink-0 text-variable-collection-color-princial-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
                <path d="m22 8-10 6L2 8" />
              </svg>

              <div className="flex items-center justify-center w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-variable-collection-color-princial-2 text-sm text-center leading-7 whitespace-normal break-words relative tracking-[0]">
                santonocitoasociados@gmail.com
              </div>
            </div>
          </div>
        </footer>
      </div>

      <NavigationMenuSection />
    </div>
  );
};
