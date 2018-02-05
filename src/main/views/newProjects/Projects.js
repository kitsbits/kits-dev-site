import React from "react";
import glamorous from "glamorous";
import Header from "./Header";
import WebProject from "./WebProject";
import Overlay from "./Overlay";
import BuiltWith from "./BuiltWith";
import BuiltWithFramework from "./BuiltWithFramework"
import Slider from "./Slider"
import { ponder, misc } from "../../assets/assets";
import { projects } from "./details";
import { Link } from "react-router-dom";


export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectDetails: projects[props.match.params.id],
            overlayHeight: 0,
            pictures: projects[props.match.params.id].pictures,
            frameworks: projects[props.match.params.id].frameworks
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.setState(prevState => {
                return {
                    ...prevState,
                    projectDetails: projects[nextProps.match.params.id],
                    pictures: projects[nextProps.match.params.id].pictures,
                    frameworks: projects[nextProps.match.params.id].frameworks
                }
            });
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

    mapWebProject(pictures) {
        return pictures.map(picture => {
            return <WebProject picture={picture} key={picture}/>
        });
    }

    mapBuiltWithFrameworks(project) {
        return project.map(framework => {
            return <BuiltWithFramework framework={framework} key={framework} />
        });
    }

    mapProjectComponents() {
        this.setState(prevState => {
            return {
                ...prevState,
                projectsToRender: this.state.projectDetails.map(project => {
                    return (
                        <div>
                            <div id="project" style={{paddingBottom: "50px"}}>
                                <Header picture={project.header} polygon={misc.polygon}/>
                                <div style={{marginTop: "-70px"}}>
                                    {this.mapWebProject(project.pictures)}
                                </div>
                                    <Overlay height={this.state.overlayHeight}/>
                                </div>
                            <BuiltWith frameworks={this.mapBuiltWithFrameworks}/>
                        </div>
                    )
                })
            }
        });
    }

    render() {
        return (
            <div>
                <Slider id={Number(this.props.match.params.id)} />
                <div id="project" style={{paddingBottom: "50px"}}>
                    <Header picture={ponder.header} polygon={misc.polygon}/>
                <div style={{marginTop: "-70px"}}>
                        {this.mapWebProject(ponder.pictures)}
                    </div>
                    <Overlay height={this.state.overlayHeight}/>
                </div>
                <BuiltWith frameworks={this.mapBuiltWithFrameworks}/>
            </div>

        )
    }
}
