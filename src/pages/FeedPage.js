import React from "react";
import ArticleFeed from "../components/ArticleFeed";
import { BounceLoader } from "react-spinners";
import { useFetchData } from "../Hooks/useFetchData";

const url = `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${process.env.REACT_APP_API_KEY}`;

const FeedPage = () => {
  const { load, articles } = useFetchData(url);
  const articlesLoad = articles.results;

  if (load) {
    return (
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4">
        {articlesLoad.map((article, index) => {
          return <ArticleFeed key={index} {...article} />;
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

export default FeedPage;
