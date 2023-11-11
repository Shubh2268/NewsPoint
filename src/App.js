import React from "react";
import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const pageSize = 5;
  const apiKey = "306bc3cbcc3a4071a5d6756a0c991d0a";

  return (
    <div>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<NewsList apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
            <Route exact path="/business" element={<NewsList apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<NewsList apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<NewsList apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
            <Route exact path="/health" element={<NewsList apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" />} />
            <Route exact path="/science" element={<NewsList apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" />} />
            <Route exact path="/sports" element={<NewsList apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
            <Route exact path="/technology" element={<NewsList apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
          </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
