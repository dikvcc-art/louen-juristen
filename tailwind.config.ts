import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        beige: "#EDE6DA",
        beigedark: "#E1D7C4",
        ink: "#1C1B19",
        inklight: "#242220",
        graphite: "#4A4740",
        gold: "#A98756",
        goldlight: "#C7A876",
        silver: "#ADB1B8",
        silverlight: "#CBCDD2",
        bronze: "#A0714A",
        bronzelight: "#BC8E68",
        line: "#DCD3C4",
        lineink: "#3A362F",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        content: "1240px",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(28, 27, 25, 0.15)",
        card: "0 10px 40px -12px rgba(28, 27, 25, 0.12)",
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
