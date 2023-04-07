import React from "react";
import { useFetchHomepageData } from "../Hooks/useFetchHomepageData";
import { BounceLoader } from "react-spinners";
import Article from "../components/Article";

const Homepage = () => {
  const { load, articles } = useFetchHomepageData("home");

  if (load) {
    return (
      <div className=" max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-y-4">
        {articles.map((article, index) => {
          return <Article key={index} {...article} />;
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

export default Homepage;
