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

  return (
    // container
    <div className="container border-b-2 border-black w-[90%] mx-auto h-fit">
      {/* sectionName & title */}
      <div className="section-info mt-2">
        <Link to={`/section/${section}`}>
          <p className="font-bold bg-black text-white p-2 w-fit ml-2 capitalize">
            {formatSection(section)}
          </p>
        </Link>
        <Link to={url} target="_blank" rel="noreferrer">
          <h2 className="font-bold text-3xl text-center font-franklin mt-2">
            {title}
          </h2>
        </Link>
      </div>
      {/* img */}
      <div className="mt-2">
        {multimedia && (
          <img
            className="hidden max-w-[80%] mx-auto"
            src={multimedia[1].url}
            alt=""
          />
        )}
      </div>
      {/* info */}
      <div className="mt-2 flex flex-col">
        <p className="mx-auto text-justify font-franklin w-[100%]">
          {abstract}
        </p>
        <div className="flex flex-row justify-between items-center mt-2">
          <p className="font-bold">{byline}</p>
          <p className="font-bold mr-2">{formatDate(published_date)}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
