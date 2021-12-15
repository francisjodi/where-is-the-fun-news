import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import "./app.css";
import { SignIn, SignOut, useAuthentication } from "./authService";
import SavedArticles from "./components/SavedArticles";

function App() {
  return (
    <NewsContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <SignIn />
          } />
          <Route path="/news" element={
            <News />
          } />
          <Route path="/view" element={
            <SavedArticles />
          } />
        </Routes>
      </Router>
    </NewsContextProvider>
  );
}

export default App;
