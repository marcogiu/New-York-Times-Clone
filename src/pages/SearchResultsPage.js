import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import { useFetchSearchData } from "../Hooks/useFetchSearchData";

const SearchResultsPage = () => {
  const { formatSection } = useGlobalContext();
  const { search } = useParams();

  const { loading, articles } = useFetchSearchData(search);

  return <div>{search}</div>;
};

export default SearchResultsPage;
