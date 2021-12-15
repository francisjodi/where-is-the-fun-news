import { useContext } from "react";
import { NewsContext } from "../NewsContext";
import styled from "styled-components";
import {SignIn, useAuthentication} from "../authService";
import Back from "./ReRoute";

const Content = styled.div`
  width: 100%;
  height: 100%;
  border: 2px dashed blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  border: 2px dashed black;
`;
const Author = styled.h3`
  border: 2px dashed yellow;
`;
const Visit = styled.a`
  cursor: pointer;
`;
const ArticleContent = styled.div`
  border: 2px dashed red;
`;

export default function ViewArticle(props) {
  const user = useAuthentication();
  const { currentArticle } = props;

  if (!user) {
    return <SignIn />
  }
  console.log(currentArticle)

  return (
    <Content>
      <Title>{(currentArticle && currentArticle.title) || ""}</Title>
      <Author>{(currentArticle && currentArticle.author) || ""}</Author>
      <Visit href={(currentArticle && currentArticle.url) || ""}>Visit</Visit>
      <ArticleContent>{(currentArticle && currentArticle.content) || ""}</ArticleContent>
      <Back />
    </Content>
  )
}