import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const ArticleSearch = ({
  byline,
  abstract,
  section_name,
  pub_date,
  headline,
  web_url,
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
    <div className="container flex flex-col justify-between items-center  w-[95%] mx-auto mt-4 pb-2 border-b-2 border-gray-300">
      {/* sectionName & title */}
      <div className="w-full mx-auto mt-2 grid grid-rows-1 grid-cols-6">
        {/* SectionName */}
        <p className="text-sm font-bold h-fit w-fit text-center bg-gray-300 rounded text-black p-1 capitalize ">
          {formatSection(section_name)}
        </p>
        {/* Title */}
        <h2 className="font-extrabold uppercase text-md w-full md:text-lg lg:text-xl text-center col-span-4">
          <Link to={web_url} target="_blank" rel="noreferrer">
            {headline.main}
          </Link>
        </h2>
      </div>
      {/* info */}
      <div className="mt-2 justify-self-center">
        {/* Abstract */}
        <p className="mx-auto text-justify text-sm w-[95%]-h-[100%]">
          {abstract}
        </p>
        <div className="flex flex-row justify-between items-center mt-2 ">
          {/* Byline */}
          {byline && (
            <p className="font-bold text-xs w-[50%]">{byline.original}</p>
          )}
          {/* Published_date */}
          <p className="font-bold mr-2 text-xs">{formatDate(pub_date)}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleSearch;
