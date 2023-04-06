import React from "react";
import { useFetchHomepageData } from "../Hooks/useFetchHomepageData";
import Article from "../components/Article";

const Homepage = () => {
  const { articles } = useFetchHomepageData("home");
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-y-4">
      {articles.map((article, index) => {
        return <Article key={index} {...article} />;
      })}
    </div>
  );
};

export default Homepage;
