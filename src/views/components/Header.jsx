import "./header.scss";
import logo from "../../img/icon.png";

import React from "react";

export default class Header extends React.Component{
  render (){
    return (
      <header>
        <div><img src={logo} /></div>
        <div><h2>Single Page Application</h2></div>    
      </header>
    );
  }
}
