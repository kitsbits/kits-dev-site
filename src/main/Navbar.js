import React from "react";

export default function Navbar() {

    const hiContainerStyles = {
        width: "250px",
        marginLeft: "45px",
        padding: "15px"
    }

    const noMargin = {
        margin: "0"
    }

    return (
        <div>
            <div style={hiContainerStyles}>
                <h1 style={noMargin}>Hi, there.</h1>
                <h1 style={noMargin}>I'm Kit and I'm a web developer</h1>
            </div>
        </div>
    )
}
