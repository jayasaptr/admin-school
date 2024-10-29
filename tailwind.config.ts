import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        gibSky: "#C3EBFA",
        gibSkyLight: "#EDF9FD",
        gibsPurple : "#CFCEFF",
        gibsPurpleLight : "#F1F0FF",
        gibsYellow : "#FAE27C",
        gibsYellowLight : "#FEFCE8",
      }
    },
  },
  plugins: [],
};
export default config;
