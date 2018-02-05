import React from "react";
import glamorous from "glamorous";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";

import Navbar from "./views/navbar/Navbar";
import Projects from "./views/newProjects/Projects";
import Resume from "./views/resume/Resume";

function App() {
    return (
        <div style={{width: "100vw", overflowX: "hidden"}}>
            <Navbar/>
            <Switch>
                    <Route exact path="/" render={() => <Redirect to="/projects/0/ponder"/>}/>
                <Route path="/projects/:id/:title" component={Projects}/>
                <Route path="/resume" component={Resume}/>
            </Switch>
        </div>
    )
}

export default withRouter(App);
