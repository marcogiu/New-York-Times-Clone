import React from "react";
import { useFetchFeedData } from "../Hooks/useFetchFeedsData";
import ArticleFeed from "../components/ArticleFeed";
import { BounceLoader } from "react-spinners";

const FeedPage = () => {
  const { load, articles } = useFetchFeedData();

  if (load) {
    return (
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4">
        {articles.map((article, index) => {
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
