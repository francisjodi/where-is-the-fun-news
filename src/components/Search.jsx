import { NewsContext } from "../NewsContext";
import axios from "axios";
import {useContext, useEffect, useRef} from "react";
import styled from "styled-components";

const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  margin-top: 10px;
`;

const Background = styled.div`
  padding: 5px;
  background: rgb(156,45,253);
  background: linear-gradient(0deg, rgba(156,45,253,1) 0%, rgba(34,193,195,1) 100%);
  border-radius: 3px;
`;

const Input = styled.input`
  border-radius: 3px;
  border: none;
`;

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
    <SearchDiv>
      <Background>
        <form onSubmit={(e) => {
          e.preventDefault();
          upDateQuery();
        }}>
          <Input ref={input} placeholder="Search" />
        </form>
      </Background>
    </SearchDiv>
  )
}
