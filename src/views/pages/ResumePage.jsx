import './pages.scss';

import React from "react";

export default class ResumePage extends React.Component{
    render(){
        return (
            <div className="resume">
                <pre>{
                    `
                    Resume Page 
                    Lorem Ipsum
                    Lorem Ipsum
                    Lorem Ipsum
                    `
                }</pre>
            </div>    
        );
    }
}