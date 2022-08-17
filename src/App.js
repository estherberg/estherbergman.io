import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Knowledges" element={<Knowledges />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
