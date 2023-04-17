import React from "react";
import { BounceLoader } from "react-spinners";
import Article from "../components/Article";
import { useFetchData } from "../Hooks/useFetchData";

const Homepage = () => {
  const urlHome = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`;

  const { load, articles } = useFetchData(urlHome);

  const articlesLoad = articles.results;

  if (load) {
    return (
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-y-4">
        {articlesLoad.map((article, index) => {
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
