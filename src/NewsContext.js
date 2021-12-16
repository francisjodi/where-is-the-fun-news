import React, {createContext, useEffect, useState} from "react";
import axios from "axios";

export const NewsContext = createContext({});

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const [query, setQuery] = useState("joy");
  //const apiKey = "847f748206a548ce86de55a5d8d4229a";

  useEffect(() => {
    axios.get(
        `https://proxyforelenaandtori.rtoal.repl.co/news?q=joy`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data, setData, query, setQuery }}>
      {props.children}
    </NewsContext.Provider>
  );
};
