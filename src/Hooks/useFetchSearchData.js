import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchSearchData = (search) => {
  const [load, setLoad] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setArticles(res.data.response.docs);
        setLoad(true);
      })
      .catch((err) => console.log(err));
  }, [search]);

  return { load, articles };
};
