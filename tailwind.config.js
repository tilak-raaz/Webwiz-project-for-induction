/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        navbg: 'rgb(246,246,246)',
        navtext: 'rgb(43,0,43)',
        webwiz: 'rgb( 45,0,80)',
        cardbg: 'rgb(246,246,246)',
        card1: "#C7EFEE",
        card2: "#FFE8CD",
        card3: "#E0F0FF"

      },
      fontFamily: {
        poppins: ["Poppins", 'serif']
      },
      fontWeight: {
        'dark': 400,
        'darker': 500
      },
      dropShadow: {
        '3xl': '10px 20px 70px rgb(43 0 43 / 0.45)',
      },
      boxShadow: {
        '4xl': '0px 2px 7px 0px rgba(43, 0, 43, 0.15)',
        '5xl': '1px 50px 50px 0px rgba(43, 0, 43, 0.25)',
        '3xl': '0px 2px 3px 0px rgba(0,0,0 ,0.15)',
        '6xl': '0px 2px 30px 10px rgba(70,1,60 ,0.22)',
        '7xl': '0px 2px 3px 0px rgba(0,0,0 ,0.30)',
      }


    },
  },
  plugins: [],
}

