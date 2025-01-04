import { defineConfig } from "@pandacss/dev";
import {Color} from '@/App';
import { Token } from "styled-system/types/composition";

type ColorTokens = {
  [key in Color]: Token<string>
}

const colorTokens: ColorTokens = {
  green:{value:"green"},
  red:{value:"red"},
  blue:{value:"blue"},
  white:{value:"white"},
  brown:{value:"brown"},
  yellow:{value:"yellow"},
  purple:{value:"purple"},
  pink:{value:"pink"},
  gray:{value:"gray"},
}

export default defineConfig({
  // Whether to use css reset
  // preflight: true,
  jsxFramework: 'react',

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
          body: {value: 'system-ui, sans-serif' }
        },
        sizes: {
          sm: {value: "24px"},
          medium: {value : "32px"},
          large: {value: "40px"},
          imgW: {value: "14px"},
          imgH: {value:"16px"},
        },
        fontSizes: {
            sm: {value: "24px"},
            medium : {value: "30px"},
            reorderS: {value: "12px"},
            reorderM: {value: "14px"},  
        },
      }
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
});

export type { Color }