import { useState } from "react";
import axios from "axios";

export const useFetchFeedData = () => {
  const [articles, setArticles] = useState([]);

  axios
    .get(
      `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${process.env.REACT_APP_API_KEY}`
    )
    .then((res) => setArticles(res.data.results))
    .catch((err) => console.log(err));

  return { articles };
};
