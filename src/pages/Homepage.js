import React from "react";
import { useFetchHomepageData } from "../Hooks/useFetchHomepageData";
import Article from "../components/Article";

const Homepage = () => {
  const { articles } = useFetchHomepageData("home");
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {articles.map((article, index) => {
        return <Article key={index} {...article} />;
      })}
    </div>
  );
};

export default Homepage;
