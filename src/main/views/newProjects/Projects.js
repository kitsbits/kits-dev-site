import React from "react";
import glamorous from "glamorous";
import Header from "./Header";
import WebProject from "./WebProject";
import MobileProject from "./MobileProject";
import BuiltWith from "./BuiltWith";
import Slider from "./Slider"
import { projects } from "./details";
import { Link } from "react-router-dom";


export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: projects[props.match.params.id],
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
                    overlayHeight: projects[nextProps.match.params.id].height + 75,
                }
            });
        }
    }

    scrollToTop() {
        window.scrollTo(0, 0);
    }

    mapWebProject(pictures) {
        return pictures.map(picture => {
            return <WebProject picture={picture} key={picture}/>
        });
    }

    mapMobileProject(pictures) {
        return pictures.map(picture => {
            return <MobileProject picture={picture} key={picture}/>
        });
    }

    mapFrameworks(frameworks) {
        return frameworks.map(framework => {
            return <BuiltWith framework={framework} key={framework} />
        });
    }

    render() {
        // Container Styles \\
        const PageContainer = glamorous.div({

        });

        const ProjectContainer = glamorous.div({
            paddingBottom: "175px",
            marginTop: "100px",
            backgroundColor: "rgba(40,33,36,0.82)",
        });

        const PicsContainer = glamorous.div({
            marginTop: "-70px",
            position: "relative",
        });

        const MobileContainer = glamorous.div({
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            width: "80%",
            margin: "auto",
        });

        const BuiltWith = glamorous.h1({
            paddingLeft: "25px",
        });

        const FrameworksContainer = glamorous.div({
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            width: "100%",
            padding: "50px",
            backgroundColor: "#F7F7F7",
        });
        //////////////////////////////////////////

        return (
            <PageContainer>
                <ProjectContainer id="project">
                    <Slider id={Number(this.props.match.params.id)} top="280px" scrollTop={this.scrollToTop}/>
                    <Header picture={this.state.project.header} project={this.state.project}/>
                    <PicsContainer>
                        {this.state.project.web ?
                            this.mapWebProject(this.state.pictures)
                        :
                            <MobileContainer>
                                {this.mapMobileProject(this.state.pictures)}
                            </MobileContainer>
                        }
                        <Slider id={Number(this.props.match.params.id)} top="105%" scrollTop={this.scrollToTop}/>
                    </PicsContainer>
                </ProjectContainer>
                <BuiltWith>BUILT WITH</BuiltWith>
                <FrameworksContainer>
                    {this.mapFrameworks(this.state.frameworks)}
                </FrameworksContainer>
            </PageContainer>
        )
    }
}
