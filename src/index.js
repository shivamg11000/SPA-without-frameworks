
// pages
import { contactPage, homePage, resumePage } from "./views/pages/*.js";
// components
import { header, navbar, footer } from "./views/components/*.js";


// default styling
import "./index.scss";

// content in link after # is not read so no server request is made, this way client side routing can be done
const routes = {
  '#': homePage,
  '#/resume': resumePage,
  '#/contact': contactPage,
};



const router = () => {
    const entry = document.querySelector(".container");
    const html = 
        header.html + 
        navbar.html + 
        routes[window.location.hash ? window.location.hash : "#"].html +
        footer.html
    ;
     entry.innerHTML = html;

};

window.addEventListener("hashchange", router); // on hash link change, example from "#" to "#/home"

window.addEventListener("load", router);  // on html loads


