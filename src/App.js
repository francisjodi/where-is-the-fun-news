import React from "react";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import Search from "./components/Search";
import "./app.css";

function App() {
  return (
    <NewsContextProvider>
      <Search />
      <News />
    </NewsContextProvider>
  );
}

export default App;