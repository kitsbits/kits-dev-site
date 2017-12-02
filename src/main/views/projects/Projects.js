import React from "react";
import glamorous from "glamorous";

import DBsDiary from "./DBsDiary";
import MobileProject from "./MobileProject";

export default function Projects() {

    return (
        <div>
            <DBsDiary
                title="DBs Diary"
                description="A simple, purposefully dated, user interface for uninhibited journaling"
                goThere="http://localhost:3000/"
                goText="go there"
                seeCode="https://github.com/noblepaper/dbs-diary"
                seeText="see code"/>
            <MobileProject
                title="Native Weather"
                description="Simple IOS weather app with wildly unneccessary user authentication"
                seeCode="https://github.com/vschool-september-2017/native-weather"
                seeText="see code"/>
        </div>
    )
}
