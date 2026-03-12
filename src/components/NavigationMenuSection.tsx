"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Quienes somos", href: "#quienes-somos" },
  { label: "Nuestras especialidades", href: "#especialidades" },
  { label: "Por qué elegirnos", href: "#por-que" },
  { label: "Nuestros clientes", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export const NavigationMenuSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 z-[50] w-full bg-white">
      <div className="flex w-full items-center justify-between gap-4 px-6 py-3 md:h-[67px] md:px-12 md:py-0 lg:px-24 xl:px-40">
        <div className="flex items-center h-[40px] md:h-full w-[220px] shrink-0">
          <img
            className="h-[40px] w-auto max-w-full object-contain"
            alt="Logo"
            src="/logo.webp"
          />
        </div>

        <div className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="[font-family:'Gotham-Book',Helvetica] font-normal text-[#5E4F4A] text-base tracking-[0] leading-[48px] whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-black/10 xl:hidden"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-[#5d4e49]"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`xl:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <div className="border-t border-black/10 bg-white px-6 py-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-2 [font-family:'Gotham-Book',Helvetica] text-base text-[#5E4F4A] hover:bg-black/5"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
