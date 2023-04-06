import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaUserAlt } from "react-icons/fa";

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
    <div className="flex flex-col items-center mt-2 border-t-4 border-double border-black w-[80%] mx-auto">
      <Link to={"/"} onClick={scrollToTop}>
        <h2 className="mt-2 font-ancient text-2xl md:text-6xl">
          The New York Times
        </h2>
      </Link>
      <ul className=" mt-4 grid grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-2 lg:gap-y-5 border-b-4 border-double border-black w-[90%]">
        {sections.map((section, index) => {
          return (
            <li key={index} className="capitalize mb-4">
              {section === "home" ? (
                <Link to={"/"} onClick={scrollToTop}>
                  {formatSection(section)}
                </Link>
              ) : (
                <Link to={`/section/${section}`} onClick={scrollToTop}>
                  {formatSection(section)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
      {/* my info */}
      <div className="mt-4">
        <p>© Copyright 2023 by Marco Giuliani</p>
        <div className="flex flex-row w-[80%] justify-center mx-auto mb-2 gap-4 mt-4">
          {/* linkedin */}
          <a
            href="https://www.linkedin.com/in/marco-giuliani-2a20b4179/"
            target="_blank"
            rel="noreferrer">
            <FaLinkedin className="text-2xl md:text-3xl lg:text-4xl hover:text-blue-500 active:text-blue-700" />
          </a>
          {/* github */}
          <a
            href="https://github.com/marcogiu"
            target="_blank"
            rel="noreferrer">
            <FaGithub className="text-2xl md:text-3xl lg:text-4xl hover:text-gray-500 active:text-gray-700" />
          </a>
          {/* my website */}
          <a
            href="https://marcogiu.github.io/myWebsite/"
            target="_blank"
            rel="noreferrer">
            <FaUserAlt className="text-2xl md:text-3xl lg:text-4xl hover:text-red-500 active:text-red-700" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
