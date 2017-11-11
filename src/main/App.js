import React from "react";
import Navbar from "./Navbar";

const backgroundImg = require("./assets/background_main.jpg");

export default function App() {
    const backgroundPicture = {
        background: `url(${backgroundImg}) no-repeat`,
        backgroundPosition: "0 10%",
        width: "100wh",
        height: "85vh",
        overflow: "scroll",
        backgroundSize: "cover"
    }

    return (
        <div>
            <Navbar/>
            <div style={backgroundPicture}>

            </div>
        </div>
    )
}
