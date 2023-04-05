import React, { useEffect, useState } from "react";
import axios from "axios";

export const useFetchHomepageData = (section) => {
  const [articles, setArticles] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        setArticles(res.data.results);
        setLoad(true);
      })
      .catch((err) => console.log(err));
  }, [section]);

  return { load, articles };
};
