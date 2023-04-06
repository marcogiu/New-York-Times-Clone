import React from "react";
import { useFetchFeedData } from "../Hooks/useFetchFeedsData";
import Article from "../components/Article";

const FeedPage = () => {
  const { articles } = useFetchFeedData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-y-4">
      {articles.map((article, index) => {
        return <Article key={index} {...article} />;
      })}
    </div>
  );
};

export default FeedPage;
