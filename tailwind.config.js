const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              color: theme("colors.gray.900", defaultTheme.colors.gray[900]),
              padding: "0.1em 0.3em",
              borderRadius: "6px",
              verticalAlign: "middle",
              fontWeight: "500",
              backgroundColor: theme(
                "colors.gray.200",
                defaultTheme.colors.gray[200]
              ),
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            "ol > li": {
              paddingLeft: "1.25rem",
            },
            "ul > li": {
              paddingLeft: "1.25rem",
            },
            "ul > li::before": {
              backgroundColor: theme(
                "colors.gray.700",
                defaultTheme.colors.gray[700]
              ),
            },
            "blockquote p:first-of-type::before": {
              content: "none",
            },
            "blockquote p:last-of-type::after": {
              content: "none",
            },
          },
        },
      }),
      colors: {
        denim: {
          50: "#f5fafc",
          100: "#e3f7fc",
          200: "#bdeaf9",
          300: "#90d6f7",
          400: "#52b2f5",
          500: "#2689f2",
          600: "#1a65e8",
          700: "#1b4fc9",
          800: "#183d96",
          900: "#143172",
        },
        royalblue: {
          50: "#f6f9fc",
          100: "#edf2fb",
          200: "#d7def9",
          300: "#bec3f7",
          400: "#9c97f6",
          500: "#766af4",
          600: "#5748eb",
          700: "#4338d0",
          800: "#342d9f",
          900: "#29257a",
        },
        flamingo: {
          50: "#f9f9fb",
          100: "#f6f1f9",
          200: "#ebdaf5",
          300: "#e1bcf0",
          400: "#d68be9",
          500: "#c85ee1",
          600: "#a63dcd",
          700: "#792fa8",
          800: "#56267a",
          900: "#42205c",
        },
        cerise: {
          50: "#fcf9f9",
          100: "#fbf2f5",
          200: "#f8d9e9",
          300: "#f6b6d7",
          400: "#f580b7",
          500: "#f45392",
          600: "#e6336a",
          700: "#bb2752",
          800: "#89203f",
          900: "#681a32",
        },
        sunset: {
          50: "#fcfaf8",
          100: "#fcf3f1",
          200: "#f8dedf",
          300: "#f6bec3",
          400: "#f48b91",
          500: "#f35e61",
          600: "#e33c3f",
          700: "#b72d35",
          800: "#86242e",
          900: "#661e26",
        },
        mango: {
          50: "#fcf9f7",
          100: "#fbf4ec",
          200: "#f8e2d1",
          300: "#f5c6a6",
          400: "#f29866",
          500: "#f06c37",
          600: "#de4822",
          700: "#b23621",
          800: "#832a21",
          900: "#64221e",
        },
        chocolate: {
          50: "#fbfaf7",
          100: "#fbf6ea",
          200: "#f6e8ca",
          300: "#f2d099",
          400: "#eba754",
          500: "#e37d28",
          600: "#c85718",
          700: "#974119",
          800: "#6d321b",
          900: "#522819",
        },
        carrot: {
          50: "#fbfaf8",
          100: "#faf7ec",
          200: "#f4eace",
          300: "#eed49f",
          400: "#e3ad5b",
          500: "#d5842c",
          600: "#b35e1a",
          700: "#83471b",
          800: "#5d351c",
          900: "#452a1a",
        },
        shadow: {
          50: "#f9fafa",
          100: "#f5f7f4",
          200: "#e8ece3",
          300: "#d7d9cc",
          400: "#b4b5a2",
          500: "#898e72",
          600: "#62694d",
          700: "#4a503f",
          800: "#373d34",
          900: "#2b302b",
        },
        steel: {
          50: "#f6fafb",
          100: "#eaf6f9",
          200: "#cfeaf3",
          300: "#abd7ed",
          400: "#71b4e5",
          500: "#3f8dd9",
          600: "#2c68c1",
          700: "#28519a",
          800: "#0c4486", // BRAND COLOR
          900: "#1c3256",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
