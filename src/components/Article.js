import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import "./article.css";
const Article = ({
  section,
  published_date,
  title,
  byline,
  multimedia,
  abstract,
  url,
}) => {
  const { formatSection } = useGlobalContext();

  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Date(date).toLocaleDateString("en-En", options);
  };

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  if (section !== "admin" && section && title && abstract && byline) {
    return (
      // container
      <div className="container flex flex-col justify-between items-center  w-[90%] mx-auto pb-2 border-b-2 border-gray-300">
        {/* sectionName & title */}
        <div>
          {/* SectionName */}
          <p className="text-sm font-bold h-fit w-fit mt-2 bg-gray-300 rounded text-black p-1 capitalize hover:bg-black hover:text-white active:bg-gray-800">
            <Link to={`/section/${section}`} onClick={scrollToTop()}>
              {formatSection(section)}
            </Link>
          </p>
          {/* Title */}
          <h2 className="font-extrabold uppercase text-md w-[90%] mx-auto mt-2 text-center">
            <Link to={url} target="_blank" rel="noreferrer">
              {title}
            </Link>
          </h2>
        </div>
        {/* img */}
        <div className="mt-2">
          {multimedia && (
            <img className="hidden" src={multimedia[1].url} alt={title} />
          )}
        </div>
        {/* info */}
        <div className="mt-2 justify-self-center">
          {/* Abstract */}
          <p className="mx-auto text-justify text-sm w-[95%]-h-[100%]">
            {abstract}
          </p>
          <div className="flex flex-row justify-between items-center mt-2 ">
            {/* Byline */}
            {byline && <p className="font-bold text-xs w-[50%]">{byline}</p>}
            {/* Published_date */}
            <p className="font-bold mr-2 text-xs">
              {formatDate(published_date)}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Article;
