/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        clear: "1fr auto 1fr",
      },
      backgroundImage: {
        avatar: "url('/src/assets/avatar-background.svg')",
      },
      boxShadow: {
        user_card: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
}
