import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "847f748206a548ce86de55a5d8d4229a";

  useEffect(() => {
    axios.get(
        `http://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=847f748206a548ce86de55a5d8d4229a`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
