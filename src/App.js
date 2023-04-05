import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/ErrorPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import SectionPage from "./pages/SectionPage";
import FeedPage from "./pages/FeedPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/section/:nameSection" element={<SectionPage />} />
          <Route path="/search/:content" element={<SearchResultsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
