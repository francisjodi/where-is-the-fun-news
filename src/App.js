import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NewsContextProvider } from "./NewsContext";
import News from "./components/News";
import "./app.css";
import { SignIn, SignOut, useAuthentication } from "./authService";

function App() {
  const user = useAuthentication()

  useEffect(() => {
    if (!user || window.location.href.slice(-4) === "news") return;
    window.location.href = "/news";
  },[user])

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
        </Routes>
      </Router>
    </NewsContextProvider>
  );
}

export default App;
