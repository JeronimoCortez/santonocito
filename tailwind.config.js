/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2.5rem",
      },
      screens: {
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        "textos-descriptivos": "var(--textos-descriptivos)",
        "variable-collection-color-princial-1":
          "var(--variable-collection-color-princial-1)",
        "variable-collection-color-princial-2":
          "var(--variable-collection-color-princial-2)",
        "ink-primary": "var(--color-ink-primary)",
        "ink-muted": "var(--color-ink-muted)",
        "surface-subtle": "var(--surface-subtle)",
      },
      boxShadow: {
        soft: "0 12px 30px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl: "12px",
      },
    },
  },
  plugins: [],
};
