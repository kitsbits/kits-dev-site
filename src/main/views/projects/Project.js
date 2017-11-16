import React from "react";
import glamorous from "glamorous";

import Header from "./components/Header";
import Photo from "./components/Photo";

export default function Project(props) {

    ////// PHOTOS \\\\\\\
    const backgroundImg = require("../../assets/background_main.jpg");
    const dbs1 = require("../../assets/dbs-diary/dbs1.png");
    const dbs2 = require("../../assets/dbs-diary/dbs2.png");
    const dbs3 = require("../../assets/dbs-diary/dbs3.png");

    ////// STYLING \\\\\\\
    const mediaQueries = {
        small: "@media screen and (max-width: 991px)"
    }

    const ProjectContainer = glamorous.div({
        background: `url(${backgroundImg}) no-repeat`,
        paddingTop: "500px",
        width: "100wh",
        backgroundSize: "cover",
        paddingBottom: "25px"
    });

    return (
        <ProjectContainer id="project-container">
            <Header
                title={props.title}
                description={props.description}
                goThere={props.goThere}
                goText={props.goText}
                seeCode={props.seeCode}
                seeText={props.seeText}/>
            <Photo url={dbs1}/>
            <Photo url={dbs2}/>
            <Photo url={dbs3}/>
        </ProjectContainer>
    )
}
