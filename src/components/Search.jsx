import { NewsContext } from "../NewsContext";
import axios from "axios";
import {useContext, useEffect, useRef} from "react";

export default function Search() {
  const { query, setQuery, setData } = useContext(NewsContext);
  const input = useRef();

  useEffect(() => {
    axios.get(
      `http://newsapi.org/v2/everything?q=${query}&sortBy=relevancy,publishedAt&apiKey=847f748206a548ce86de55a5d8d4229a`
    )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [query]);

  function upDateQuery() {
    if (!input.current) return;
    if (query !== input.current.value) setQuery(input.current.value);
  }

  return (
    <group>
      <form onSubmit={(e) => {
        e.preventDefault();
        upDateQuery();
      }}>
        <input ref={input} placeholder="Search" />
      </form>
    </group>
  )
}