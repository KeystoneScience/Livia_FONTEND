import { Appearance, useColorScheme } from "react-native-appearance";

export default Appearance.getColorScheme() === "light"
  ? {
      gray: "#777777",
      background: "#f1fafc", //#fff7f0 <--old one now its blueish
      primary: "#8080ff",
      primaryTransparent: "rgba(80, 80, 255, .975)",
      secondary: "#ec4646",
      white: "#fff",
      blue: "#257AFD",
      black: "#000",
      grey: "#DEDEDE",
      lightGray: "#BBBBBB",
      backgroundDarken: "rgba(0,0,0,.25)",
      backgroundDarkenLess: "rgba(0,0,0,.15)",
      selectGreen: "rgba(8, 168, 0, .6)",
      //--------------------------------------
      backbround_icon: "rgba(0,0,0, .87)",
      //-
      AATextDARK: "rgba(255,255,255, .87)",
      primaryText: "rgba(0, 0, 0, 1)", //A Text size
      AAText: "rgba(0, 0, 0, .87)", //AA Text size
      AAAText: "rgba(0, 0, 0, .60)", //AAA Text size
      //-----------------------------------------
      red: "#f93b1e",
      yellow: "#f7bf00",
      greenHeart: "#29bb2c",
      //---------------------------------------
      fg00: "rgba(255, 255, 255, 0)",
      fg01: "rgba(255, 255, 255, .05)",
      fg02: " rgba(255, 255, 255, .07)",
      fg03: "rgba(255, 255, 255, .08)",
      fg04: "rgba(255, 255, 255, .09)",
      fg06: "rgba(251, 253, 254, 1)", //2c2c2c
      fg08: "rgba(251, 253, 254, 1)",
      fg12: "rgba(255, 255, 255, .14)",
      fg16: "rgba(251, 253, 254, .98)",
      fg24: "rgba(255, 255, 255, .16)",
      theme: "light",
    }
  : {
      //dark theme----------------------------------------------------------------------------
      background: "#172022", //11181e //121212
      primary: "#8080ff",
      primaryTransparent: "rgba(80, 80, 255, .975)",
      secondary: "#ec4646",
      white: "#fff",
      black: "#000",
      grey: "#DEDEDE",
      lightGray: "#BBBBBB",
      selectGreen: "rgba(8, 168, 0, .6)",
      backgroundDarken: "rgba(0,0,0,.25)",
      backgroundDarkenLess: "rgba(0,0,0,.15)",
      gray: "#777777",
      blue: "#257AFD",

      //--------------------------------------
      backbround_icon: "rgba(255,255,255, .87)",
      //--
      AATextDARK: "rgba(255,255,255, .87)",
      primaryText: "rgba(255,255,255, 1)", //A Text size
      AAText: "rgba(255,255,255, .87)", //AA Text size
      AAAText: "rgba(255,255,255, .6)", //AAA Text size
      //----------------------------------------------
      red: "#d9231a",
      yellow: "#f7bf00",
      greenHeart: "#5ca23e",
      //-------------------------------------------
      fg00: "rgba(255, 255, 255, 0)",
      fg01: "rgba(255, 255, 255, .05)",
      fg02: " rgba(255, 255, 255, .07)",
      fg03: "rgba(255, 255, 255, .08)",
      fg04: "rgba(255, 255, 255, .09)",
      fg06: "#2f3838", //2c2c2c
      fg08: "#485050",
      fg12: "rgba(255, 255, 255, .14)",
      fg16: "rgba(54, 59, 59, .97)", //31383e //353535 <--solid color
      fg24: "rgba(255, 255, 255, .16)",
      theme: "dark",
    };

// blue: "#0070FF",
// superBlue: "#4faaff",
// green: "#43d96b",
