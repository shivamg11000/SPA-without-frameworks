import "./pages.scss";

import React from "react";

export default class HomePage extends React.Component{
    render(){
        return (
            <div className="home">
                <pre>{  
                    `
                    Single Page Application
                    made without using any frontend framework
                    no jQuery, React, Angular
                    no templating engine used
                    no hanlebars, pug, jsx
                    Only parceljs used as bundler 
        
                    Client side routing is performed using #(hash) links
                    `
                }</pre>
            </div>    
        );
    }
}