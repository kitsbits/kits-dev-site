import React from "react";
import Navbar from "./Navbar";

const backgroundImg = require("./assets/background_main.jpg");

export default function App() {
    const backgroundPicture = {
        background: `url(${backgroundImg}) no-repeat`,
        width: "100wh",
        height: "100vh",
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
