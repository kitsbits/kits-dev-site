import React from "react";
import glamorous from "glamorous";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Projects from "./views/projects/Projects";
import Resume from "./views/resume/Resume";

export default function App() {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Projects}/>
                <Route path="/resume" component={Resume}/>
            </Switch>
        </div>
    )
}
