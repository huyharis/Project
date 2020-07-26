import React from "react";
import "./resources/styles.css";
import Header from "./components/header_footer/Header.js";
import Featured from "./components/featured";
import Highlights from "./components/Highlights";
import VunueNfo from "./components/venueNfo/index";
import Pricing from "./components/Pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <div
      className="App"
      style={{ height: "1500px", background: "cornflowerblue" }}
    >
      <Header />
      <Element name="featured">
        <Featured />
      </Element>

      <Element name="venuenfo">
        <VunueNfo />
      </Element>

      <Element name="highlights">
        <Highlights />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
