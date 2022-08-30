import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../Pages/Home";
import Favorites from "../Pages/Favorite";

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='favorites' element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
