/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      rowdies: ["Rowdies", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
      "rubik-dirt": ["Rubik Dirt", "sans-serif"],
      rosario: ["Rosario", "sans-serif"],
      rambla: ["Rambla", "sans-serif"],
      poppins: ["Poppins,Helvetica"],
      caveat: ["Caveat", "Helvetica"],
      antonsc: ["Anton SC","Helvetica"],
      monse:["Montserrat","Helvetica"],
      roboto:["Roboto","Helvetica"],
      owsald:["Oswald","Helvetica"],
      Oregano:["Oregano","Helvetica"],
    },

    extend: {
      colors: {
        "sky-350": "#45FFDA",
        "f-b-1": "#1E1E1E",
        "custom-blue": "rgba(0, 123, 255, 0.5)",
        "Soft-grayish-blue": "#f0f4f8",
        "pale-warm-beige": "#faf3e0",
        "dark-slate-gray": "#2e3a59",
        "vibrant-teal": "#17a2b8",
        "energetic-orange": "#ff7d47",
        "lighter-teal": "#21b7c4",
        "lighter-coral": "#ff9e70",
        "deep-navy": "#1e3a5f",
        "darkBlueGray": "#181822",
        "bg-one":"#fff5d7",
        "bg-one-text": "#ffaaab",
        "text-3":"#feb300",
        "bg-one-text-2": "#ff5e6c",
        "bg-one-text-hover": "#003135",
        "bg-one-button": "#024950",
        "wine-red":"#800020"

      },
      scale: {
        '175': '1.75',
        '102': '1.02',
        '101': '1.01',
      },
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
    },
    dropShadow: {
      'white': '0 4px 6px rgba(255, 255, 255, 0.5)', // Adjust color and opacity as needed
    },
    theme: {
      extend: {
        textShadow: {
          glow: '0 0 5px rgba(99, 102, 241, 1), 0 0 10px rgba(99, 102, 241, 1), 0 0 15px rgba(99, 102, 241, 1)',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'), // Add this plugin
  ],
}};
