import React from "react";
import Header from "./Header";
import WebProject from "./WebProject";
import Overlay from "./Overlay";
import { ponder, misc } from "../../assets/assets.js";

export default class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            projectComponents: [],
            overlayHeight: 0,
        }
    }

    componentDidMount() {
        this.setState(prevState => {
            return {
                ...prevState,
                overlayHeight: document.getElementById("project").offsetHeight
            }
        });
    }

    onClick() {

    }

    mapWebProject(project) {
        return project.map(pictureUrl => {
            return <WebProject picture={pictureUrl} key={pictureUrl}/>
        });
    }

    render() {
        return (
            <div id="project" style={{paddingBottom: "50px"}}>
                <Header picture={ponder.header} polygon={misc.polygon}/>
            <div style={{marginTop: "-40px"}}>
                    {this.mapWebProject(ponder.project)}
                </div>
                <Overlay height={this.state.overlayHeight}/>
            </div>

        )
    }
}
