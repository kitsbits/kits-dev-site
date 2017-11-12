import React from "react";
import glamorous from "glamorous";

import Navbar from "./Navbar";
import Projects from "./views/projects/Projects";

const backgroundImg = require("./assets/background_main.jpg");

export default function App() {
    const Main = glamorous.div({
        background: `url(${backgroundImg}) no-repeat`,
        backgroundPosition: "0 10%",
        width: "100wh",
        height: "1500px",
        overflow: "scroll",
        backgroundSize: "cover"
    });

    return (
        <div>
            <Navbar/>
            <Main>
                <Projects/>
            </Main>
        </div>
    )
}
