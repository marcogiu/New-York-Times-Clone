import React from "react";
import { useFetchFeedData } from "../Hooks/useFetchFeedsData";
import Article from "../components/Article";

const FeedPage = () => {
  const { articles } = useFetchFeedData();
  return (
    <div className="max-w[1000px]">
      <div>
        {articles.map((article, index) => {
          return <Article key={index} {...article} />;
        })}
      </div>
    </div>
  );
};

export default FeedPage;
