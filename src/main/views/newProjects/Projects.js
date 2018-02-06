import React from "react";
import glamorous from "glamorous";
import Header from "./Header";
import WebProject from "./WebProject";
import Overlay from "./Overlay";
import BuiltWith from "./BuiltWith";
import BuiltWithFramework from "./BuiltWithFramework"
import Slider from "./Slider"
import { projects } from "./details";
import { Link } from "react-router-dom";


export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: projects[props.match.params.id],
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
                    project: projects[nextProps.match.params.id],
                    pictures: projects[nextProps.match.params.id].pictures,
                    frameworks: projects[nextProps.match.params.id].frameworks,
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

    render() {
        return (
            <div>
                <Slider id={Number(this.props.match.params.id)} />
                <div id="project" style={{paddingBottom: "50px", marginTop: "100px"}}>
                    <Header picture={this.state.project.header} project={this.state.project}/>
                    <div style={{marginTop: "-70px"}}>
                        {this.mapWebProject(this.state.pictures)}
                    </div>
                    <Overlay height={this.state.overlayHeight}/>
                </div>
                <BuiltWith frameworks={this.mapBuiltWithFrameworks}/>
            </div>

        )
    }
}
