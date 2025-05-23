// tailwind.config.js
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          scroll: "scroll 40s linear infinite",
        },
        keyframes: {
          scroll: {
            "0%": { transform: "translateX(0%)" },
            "100%": { transform: "translateX(-50%)" },
          },
        },
      },
    },
    plugins: [],
  };
  