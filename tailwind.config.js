/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ember: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c"
        },
        flare: "#ef4444"
      },
      fontFamily: {
        display: ['"Barlow Condensed"', "sans-serif"],
        body: ['"Plus Jakarta Sans"', "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(249,115,22,0.22), 0 18px 50px rgba(249,115,22,0.2)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgba(239,68,68,0.3), transparent 32%), radial-gradient(circle at 80% 10%, rgba(249,115,22,0.22), transparent 24%), linear-gradient(135deg, #09090b 0%, #111827 46%, #18181b 100%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        },
        reveal: {
          "0%": { opacity: 0, transform: "translateY(18px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        reveal: "reveal 0.8s ease-out forwards"
      }
    }
  },
  plugins: []
};
