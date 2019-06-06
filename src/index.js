import React from "react";
import ReactDOM from "react-dom";

// Use when the build is served using a web server
//import { BrowserRouter as Router, Route } from "react-router-dom";

// Use when the build is to be served without a web server i.e running directly index.html from build
import { HashRouter as Router, Route} from 'react-router-dom';

// pages
import HomePage from "./views/pages/HomePage";
import ContactPage from "./views/pages/ContactPage";
import ResumePage from "./views/pages/ResumePage";


// components
import Header from "./views/components/Header";
import Navbar from "./views/components/Navbar";
import Footer from "./views/components/Footer";

// default styling
import "./index.scss";


const router = () => {
    const entry = document.querySelector(".entry");
    ReactDOM.render(
      <div className="container">
        <Header />
        <Router>
            <Navbar />
            <Route exact path="/" component={HomePage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/resume" component={ResumePage} />
        </Router>
        <Footer />
      </div>
    ,entry);
};

window.addEventListener("load", router);  // on html loads
