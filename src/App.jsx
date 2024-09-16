import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accueil from "./pages/accueil";
import About from "./pages/About"
import Error404 from "./pages/404"
import AppartementDetails from "./pages/AppartementDetails";
import Header from "./components/Header"; 
import Footer from "./components/Footer"
import Carousel from "./components/Caroussel"


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} /> 
        <Route path="/About" element={<About />} /> 
        <Route path="/appartement/:id" element={<AppartementDetails />} />
        <Route path="*" element={<Error404 />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
