import React from "react";
import { useGlobalContext } from "../context";
import { useParams } from "react-router-dom";
import { useFetchHomepageData } from "../Hooks/useFetchHomepageData";
import Article from "../components/Article";

const SectionPage = () => {
  const { formatSection } = useGlobalContext();
  const { nameSection } = useParams();
  const { articles } = useFetchHomepageData(nameSection);

  return (
    <div>
      <div>
        {articles.map((article, index) => {
          return <Article key={index} {...article} />;
        })}
      </div>
    </div>
  );
};

export default SectionPage;
