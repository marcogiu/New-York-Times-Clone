import React, { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const sections = [
    "home",
    "world",
    "us",
    "politics",
    "nyregion",
    "business",
    "opinion",
    "science",
    "arts",
    "books",
    "style",
    "food",
    "travel",
    "t-magazine",
    "realestate",
  ];

  const formatSection = (section) => {
    if (section === "us") {
      return "U.S.";
    }
    if (section === "nyregion") {
      return "N.Y.";
    }
    if (section === "t-magazine") {
      return "magazine";
    }
    if (section === "realestate") {
      return "real estate";
    } else {
      return section;
    }
  };

  return (
    <AppContext.Provider value={{ sections, formatSection }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
