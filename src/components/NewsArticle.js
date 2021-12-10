import React from "react";
import styled from "styled-components";

const Article = styled.div`
  background: rgb(156,45,253);
  background: linear-gradient(0deg, rgba(156,45,253,1) 0%, rgba(34,193,195,1) 100%);
  width: min(80%, 400px);
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin: 10px;
`;

const ArticleContent = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-radius: 5px;
`;

function NewsArticle({ data }) {
  return (
    <Article className="news">
      <ArticleContent>
        <h1 className="news_title">{data.title}</h1>
        <p className="news_desc">{data.description}</p>
        <span className="news_author">{data.author}</span> <br />
        <span className="news_published">{data.publishedAt}</span>
        <span className="news_source">{data.source.name}</span>
      </ArticleContent>
    </Article>
  );
}

export default NewsArticle;
