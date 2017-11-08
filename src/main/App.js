import React from "react";

const backgroundImg = require("./assets/background_main.jpg");

export default function App() {
    const backgroundPicture = {
        background: `url(${backgroundImg}) no-repeat`,
        backgroundPosition: "0 150px",
        width: "100wh",
        height: "100vh",
        backgroundSize: "cover"
    }

    return (
        <div style={backgroundPicture}>
            {/* <img src={require('./assets/background_main.jpg')}/> */}
        </div>
    )
}
