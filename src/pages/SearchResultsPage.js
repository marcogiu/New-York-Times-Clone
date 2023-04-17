import React from "react";
import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import ArticleSearch from "../components/ArticleSearch";
import { useFetchData } from "../Hooks/useFetchData";

const SearchResultsPage = () => {
  const { content } = useParams();

  const searchURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${content}&api-key=${process.env.REACT_APP_API_KEY}`;

  const { load, articles } = useFetchData(searchURL);
  const searchResults = articles.response;

  if (load && searchResults.docs.length < 1) {
    return (
      <div className="max-w-[1000px] mx-auto mt-2">
        <h2 className="ml-2">
          Showing results for:{" "}
          <span className="text-3xl font-bold capitalize">{content}</span>
        </h2>
        <p className=" font-bold text-center mt-3 text-xl p-10">
          No search results found
        </p>
      </div>
    );
  }
  if (load) {
    return (
      <div className="max-w-[1000px] mx-auto">
        <div className="mt-2">
          <h2 className="ml-2">
            Showing results for:{" "}
            <span className="text-3xl font-bold capitalize">{content}</span>
          </h2>
        </div>
        {searchResults.docs.map((article, index) => {
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
