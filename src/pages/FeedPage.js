import React from "react";
import { useFetchFeedData } from "../Hooks/useFetchFeedsData";
import Article from "../components/Article";

const FeedPage = () => {
  const { articles } = useFetchFeedData();
  return (
    <div className="max-w[1000px]">
      <h2 className="font-bold ml-2 text-3xl">Feed</h2>
      <div>
        {articles.map((article, index) => {
          return <Article key={index} {...article} />;
        })}
      </div>
    </div>
  );
};

export default FeedPage;
