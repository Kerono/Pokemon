import { defineConfig } from "@pandacss/dev";
import { Color } from "@/App";
import { Token } from "styled-system/types/composition";
import { defineGlobalStyles } from "@pandacss/dev";

type ColorTokens = {
  [key in Color]: Token<string>;
};

const colorTokens: ColorTokens = {
  green: { value: "green" },
  red: { value: "red" },
  blue: { value: "blue" },
  white: { value: "white" },
  brown: { value: "brown" },
  yellow: { value: "yellow" },
  purple: { value: "purple" },
  pink: { value: "pink" },
  gray: { value: "gray" },
};
const globalCss = defineGlobalStyles({
  body: {
    overflow: "auto",
    scrollbarGutter: "auto",
  },
});

export default defineConfig({
  // Whether to use css reset
  // preflight: true,
  jsxFramework: "react",
  globalCss,
  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],
  // Useful for theme customization
  theme: {
    // 👇🏻 Define your tokens here
    extend: {
      tokens: {
        colors: colorTokens,
        fonts: {
          body: { value: "system-ui, sans-serif" },
        },
        lineHeights: {
          s: { value: "16px" },
        },
        sizes: {
          imgS: { value: "24px" },
          imgMedium: { value: "32px" },
          large: { value: "40px" },
          imgW: { value: "14px" },
          imgH: { value: "16px" },
        },
        fontSizes: {
          reorderS: { value: "14px" },
          reorderM: { value: "16px" },
          reorderL: { value: "20px" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});

export type { Color };
