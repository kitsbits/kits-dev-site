import React from "react";
import glamorous from "glamorous";

import Project from "./Project";

export default function Projects() {

    return (
        <div>
            <Project
                title="DBs Diary"
                description="A simple, purposefully dated, user interface for uninhibited journaling"
                goThere="http://localhost:3000/"
                goText="go there"
                seeCode="https://github.com/noblepaper/dbs-diary"
                seeText="see code"/>
        </div>
    )
}
