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
    <div className="container border-b-2 border-black w-[80%] mx-auto h-fit col-span-2">
      <p className="font-bold bg-black text-white p-2 w-fit ml-2">
        {formatSection(section)}
      </p>
      <h2 className="font-bold text-3xl text-center font-franklin">{title}</h2>
      <img className="hidden" src={multimedia[1].url} alt="" />
      <p className="mx-auto text-justify font-franklin w-[80%]">{abstract}</p>
      <p className="text-right mr-2">{formatDate(published_date)}</p>
    </div>
  );
};

export default Article;
