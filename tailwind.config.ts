import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        darkBlue: "rgba(27, 28, 87, 1)",
        lightBlue: "rgba(209, 229, 250, 1)",
        titleBlue: "rgba(11, 114, 245, 1)",
        brown: "rgba(177, 154, 128, 1)",
        darkGrey: "rgba(98, 102, 135, 1)",
        lightGrey: "rgba(136, 139, 151, 1)",
        mainWhite: "rgba(255, 255, 255, 1)",
        bgGrey: "rgba(224, 227, 235, 1)",
        BgStatusPopular: "rgba(254, 226, 226, 1)",
        TextStatusPopular: "rgba(239, 68, 68, 1)",
        BgStatusBestDeals: "rgba(209, 250, 229, 1)",
        TextStatusBestDeals: "rgba(4, 120, 87, 1)",
        BgStatusNewStore: "rgba(219, 234, 254, 1)",
        TextStatusNewStore: "rgba(29, 78, 216, 1)",
        normalBlackText: "rgba(14, 23, 53, 1)",
        normalGreyText: "rgba(60, 69, 99, 1)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
