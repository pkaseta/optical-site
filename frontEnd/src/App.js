import React from "react";
import HeaderNav from "./Components/Header-Nav";
import Mens from "./Pages/Mens/Mens";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Styles/bootstrap.min(2).css";
import ProductScreen from "./Pages/ProductScreen/ProductScreen";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="mens" element={<Mens />} />
          <Route path="Assets/MockData.js/:id" element={<ProductScreen />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
