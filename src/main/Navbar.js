import React from "react";
import {Link} from "react-router-dom"

export default function Navbar() {
    const containerStyles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 50px"
    }

    const hiContainerStyles = {
        width: "300px",
        padding: "15px",
        fontSize: "1.35em"
    }

    const noMargin = {
        margin: "0"
    }

    const currentPageContainerStyles = {
        height: "250px",
        width: "250px",
        border: "4px solid #FF4057",
        transform: "translateY(65%)",
        borderRadius: "2px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        color: "white",
        padding: "50px"
    }

    const kitStyles = {
        color: "#FF4057"
    }

    const iconContainerStyles = {
        // alignSelf: "flex-end",
        display: "flex",
        alignItems: "flex-end",
        width: "300px",
        justifyContent: "space-around"
    }

    const linkStyles = {
        paddingBottom: "15px",
        borderBottom: "4px solid #FF4057",
        textDecoration: "none",
        margin: "0",
        color: "black",
        fontSize: "1.5em",
        fontWeight: "600",
        transition: "hover 0.2s ease-in-out"
    }

    const iconStyles = {
        width: "44px"
    }


    const github = require("./assets/Github-black.png");
    const linkedIn = require("./assets/LinkedIn-black.png");

    return (
        <div style={containerStyles} className="navbar">
            <div style={hiContainerStyles}>
                <h1 style={noMargin}>Hi, there.</h1>
                <h1 style={{...noMargin, ...kitStyles}}>I'm Kit and I'm a web developer</h1>
            </div>
            <div style={currentPageContainerStyles}>
                <h1>RECENT PROJECTS</h1>
            </div>
            <div style={iconContainerStyles}>
                <a href="" style={linkStyles}>RES<span style={{display: "block"}}>UME</span></a>
                <a target="_tab" href="https://github.com/noblepaper" style={linkStyles}><img src={github} alt="Github icon" style={iconStyles}/></a>
                <a target="_tab" href="https://www.linkedin.com/in/kitmasaracchia/" style={linkStyles}><img src={linkedIn} alt="LinkedIn icon" style={iconStyles}/></a>
            </div>
        </div>
    )
}
