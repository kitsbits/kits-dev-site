import React from "react";
import glamorous from "glamorous";

import Header from "./Header";
import Skills from "./Skills";
import Job from "./Job";

export default function Resume() {
    return (
        <div style={{backgroundColor: "red"}}>
            <p style={{position: "absolute", bottom: "0"}}>hi</p>
            <Header/>
            <Skills/>
            <Job/>
        </div>
    )
}
