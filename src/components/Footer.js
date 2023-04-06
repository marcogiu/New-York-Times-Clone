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
    <div className="flex flex-col items-center mt-2">
      <Link to={"/"} onClick={scrollToTop}>
        <h2 className="font-bold font-ancient text-2xl">The New York Times</h2>
      </Link>
      <ul className=" mt-4 grid grid-cols-3 gap-x-10 gap-y-2 border-b-2 border-black w-[90%]">
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
      {/* my info */}
      <div className="mt-4">
        <p>© Copyright 2023 by Marco Giuliani</p>
        <div className="flex flex-row w-[80%] justify-center mx-auto mb-2 gap-4 mt-4">
          {/* linkedin */}
          <a
            href="https://www.linkedin.com/in/marco-giuliani-2a20b4179/"
            target="_blank"
            rel="noreferrer">
            <FaLinkedin size={32} />
          </a>
          {/* github */}
          <a
            href="https://github.com/marcogiu"
            target="_blank"
            rel="noreferrer">
            <FaGithub size={32} />
          </a>
          {/* my website */}
          <a
            href="https://marcogiu.github.io/myWebsite/"
            target="_blank"
            rel="noreferrer">
            <FaUserAlt size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
