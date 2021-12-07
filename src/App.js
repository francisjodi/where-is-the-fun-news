import React from "react";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import Search from "./components/Search";
import "./app.css";
import { SignIn, SignOut, useAuthentication } from "./authService";

function App() {
  const user = useAuthentication()
  return (
    <NewsContextProvider>
      <Search />
      <News />
    </NewsContextProvider>
  );
}

export default App;