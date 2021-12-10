import React from "react";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import Search from "./components/Search";
import Title from "./components/Title";
import "./app.css";
import { SignIn, SignOut, useAuthentication } from "./authService";

function App() {
  const user = useAuthentication()
  return (
    <NewsContextProvider>
      <Title />
      <Search />
      <News />
    </NewsContextProvider>
  );
}

export default App;
