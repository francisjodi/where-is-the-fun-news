import {fetchFavorites} from "../favoritesService";
import { NewsContext } from "../NewsContext";
import {useContext, useEffect, useRef, useState} from "react";
//import { useEffect } from "react";

export default function SavedArticles() {
  const [loaded, setLoaded] = useState(false);


  const { data, setData } = useContext(NewsContext);

  useEffect(() => {
    fetchFavorites()
      .then((response) => {setData(response); setLoaded(true); console.log(response)})
      .catch((error) => console.log(error));
  }, []);

  return (
  <div>{ loaded ? JSON.stringify(data) : "Loading..." }</div>

  )
}