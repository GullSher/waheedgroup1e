import React from "react";
import './App.css';
import UpperNavbar from "./Components/UpperNavbar";
// import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AppRoutes from "./Components/AppRoutes";
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarold from "./Components/Navbarold";

function App() {
  return (
    <div className="App">

      <UpperNavbar />
      {/* <Navbar /> */}
      <Navbarold />

      <AppRoutes />

      <Footer />

    </div>
  );
}

export default App;
