import React from "react";
import { useGlobalContext } from "../context";
import { useParams } from "react-router-dom";
import { useFetchHomepageData } from "../Hooks/useFetchHomepageData";
import Article from "../components/Article";
import { BounceLoader } from "react-spinners";

const SectionPage = () => {
  const { nameSection } = useParams();
  const { formatSection } = useGlobalContext();
  const { load, articles } = useFetchHomepageData(nameSection);

  if (load) {
    return (
      <div className="max-w-[1000px] mx-auto">
        <h2 className="font-bold ml-2 text-3xl capitalize">
          {formatSection(nameSection) + " News"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-y-4">
          {articles.map((article, index) => {
            return <Article key={index} {...article} />;
          })}
        </div>
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

export default SectionPage;
