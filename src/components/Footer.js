import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const Footer = () => {
  const { sections, formatSection } = useGlobalContext();

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col items-center mt-2">
      <h2 className="font-bold font-ancient text-2xl">The New York Times</h2>
      <ul className="grid grid-cols-3 gap-x-16 gap-y-2">
        {sections.map((section, index) => {
          return (
            <Link to={`/section/${section}`}>
              <li
                className="capitalize text-center"
                key={index}
                onClick={scrollToTop}>
                {formatSection(section)}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
