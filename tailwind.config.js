/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        // bg: "#0096FF",
        //bg: "#006FC9",
        bg: "#27AE60",
        landingBg: "#20CD8D",
        topBarBg: "#20CD8D",
        bgDark: "#3B96DD",
        bgLight: "#C3DAF9",
        light: "#eeedec",
        bgxLight: "#E3EFFF",
        button: "#0D6EFD",
        bgxxLight: "#f3f3f3",
        section: "#F5F5F5",
        //section: "#F1F1F4",
        sidebarHeading: "#489AEE",
        reportHeading: "#489AEE",
        statusBar: "#489AEE",
        sidebarBg: "#fff",
        formColor: "#fff",
        contactButton: "#20CD8D",
        yellow: "#f39f32",
        orang: "#FFAA00",
        modal: "#C8C8C8",
        menuBg: "#fff",
        formHeading: "#006FC9",
        formTitle: "#006FC9",
        dropPointer: "#fff",
        bgDropDown: "#fff",
        bb: "#7AB8EB",
        portal: "#7F7F7F",
      },
      colors: {
        text: "#556b86",
        gn: "#20CD8D",
        landingText: "#fff",
        topBarText: "#fff",
        blueLight: "#0096FF",
        darkBlue: "#0176d3",

        cLight: "#C3DAF9",
        yellow: "#f39f32",
        orang: "#FFAA00",
        menu: "#286DB5",
        menuText: "#0176d3",
        menuHeading: "#282828",
        heading: "#fff",
        sideColor: "#282828",
        statusBar: "#fff",
        reportColor: "#fff",
        navColor: "#FFFFFF",
        col: "#006FC9",
        formHeadingColor: "#ffffff",
        dropDown: "#282828",
      },
      fontSize: {},
      height: {},
      width: {},
    },

    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1400px",
      xxxl: "1600px",
    },
    gridTemplateColumns: {
      sidebar: "300px auto",
    },
    gridTemplateRows: {
      header: "40px auto",
    },
  },
  plugins: [],
};
