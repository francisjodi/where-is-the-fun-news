import {fetchFavorites} from "../favoritesService";
import { NewsContext } from "../NewsContext";
import {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import Title from "./Title";
import ReRoute from "./ReRoute";

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Articles = styled.div`
  width: max(70%, 350px);
  height: 80%;
  margin: 50px 0;
`;

const ArticleDiv = styled.div`
  margin: 20px 0;
  text-align: center;
  padding: 5px;
  width: 100%;
  background: rgb(156,45,253);
  background: linear-gradient(0deg, rgba(156,45,253,1) 0%, rgba(34,193,195,1) 100%);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.75) -5px 5px;
`;

const ArticleContent = styled.div`
  width: 99%;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  padding: 0 10% 0 10%;
`;

export default function SavedArticles() {

  const [loaded, setLoaded] = useState(false);
  const { data, setData } = useContext(NewsContext);

  useEffect(() => {
    fetchFavorites()
      .then((response) => {setData(response); setLoaded(true); console.log(response)})
      .catch((error) => console.log(error));
  }, []);

  function formatDate(date) {
    let targetIndex;
    for (const letter of date) {
      if (letter === "T") {
        targetIndex = date.indexOf(letter);
      }
    }
    return targetIndex ? date.substring(0, targetIndex) : date;
  }

  return (
    <Page>
      <Title />
      {loaded ?
        (<Articles>
          {data.map((article) => (
            <ArticleDiv>
              <ArticleContent onClick={() => {window.open(article.url, "_blank")}}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <h4>{article.author || ""}{article.author && " - "}{formatDate(article.publishedAt)}</h4>
              </ArticleContent>
            </ArticleDiv>
          ))}
        </Articles>) : (<p>"Loading..."</p>)
      }
      <ReRoute route="/news" text="Back" />
    </Page>
  )
}
