import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import { useFetchSearchData } from "../Hooks/useFetchSearchData";
import { BounceLoader } from "react-spinners";
import ArticleSearch from "../components/ArticleSearch";

const SearchResultsPage = () => {
  const { content } = useParams();

  const { load, articles } = useFetchSearchData(content);

  if (load) {
    return (
      <div className="max-w-[1000px] mx-auto">
        <div className="mt-2">
          <h2>
            Showing results for:{" "}
            <span className="text-3xl font-bold capitalize">{content}</span>
          </h2>
        </div>
        {articles.map((article, index) => {
          return <ArticleSearch key={index} {...article} />;
        })}
      </div>
    );
  } else {
    return (
      <BounceLoader
        className="mx-auto my-36"
        color="gray"
        size={180}
        aria-label="Loading Spinner"
      />
    );
  }
};

export default SearchResultsPage;
