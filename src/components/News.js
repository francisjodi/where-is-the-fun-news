import React, {useContext, useEffect} from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";
import Title from "./Title";
import Search from "./Search";
import { SignIn, SignOut, useAuthentication } from "../authService";

function News(props) {
  const user = useAuthentication();
  const { data } = useContext(NewsContext);
  console.log(data);

  if (!user) {
    return <SignIn />
  }

  return (
    <div>
      <Title />
      <Search />
      <div className="all_news">
        {data ?
          data.articles.map((news) => (<NewsArticle data={news} key={news.url} />))
          : "Loading"
        }
      </div>
      <SignOut />
    </div>
  );
}

export default News;
