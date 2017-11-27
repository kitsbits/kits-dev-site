import React from "react";
import glamorous from "glamorous";

import Header from "./components/Header";
import Photo from "./components/Photo";

export default function Project(props) {

    ////// PHOTOS \\\\\\\
    const backgroundImg = require("../../assets/background_main.jpg");
    const journal = require("../../assets/journal.png");
    const calendar = require("../../assets/calendar.png");
    const bottom = require("../../assets/bottom.png");
    const triangle = require("../../assets/triangle.png");

    ////// STYLING \\\\\\\
    const mediaQueries = {
        small: "@media screen and (max-width: 991px)"
    }

    const ProjectContainer = glamorous.div({
        background: `url(${backgroundImg}) no-repeat`,
        paddingTop: "500px",
        width: "100wh",
        height: "2500",
        backgroundSize: "cover",
        paddingBottom: "25px",
    });

    const Triangle = glamorous.div({
        width: "0",
        height: "0",
        borderStyle: "solid",
        borderWidth: "0 3000px 900px 3000px",
        borderColor: "transparent transparent white transparent",
        position: "absolute",
        transform: "translateX(-50%)",
        // background: `url(${triangle})`,
        // backgroundSize: "cover",
        // width: "100vw",
        // height: "900px",
        // position: "absolute",
    });

    const JournalPic = glamorous.div({
        width: "488px",
        height: "372px",
        background: `url(${journal}) no-repeat center`,
        backgroundSize: "cover",
        position: "relative",
        zIndex: "1",
    });

    const CalendarPic = glamorous.div({
        width: "266px",
        height: "372px",
        background: `url(${calendar}) no-repeat center`,
        backgroundSize: "cover",
        position: "relative",
        zIndex: "1",
    });

    const BottomPic = glamorous.div({
        width: "943px",
        height: "354px",
        background: `url(${bottom}) no-repeat center`,
        backgroundSize: "cover",
        position: "relative",
        zIndex: "1",
    });

    return (
        <ProjectContainer id="project-container">
            <Triangle/>
            <Header
                title={props.title}
                description={props.description}
                goThere={props.goThere}
                goText={props.goText}
                seeCode={props.seeCode}
                seeText={props.seeText}/>
            <JournalPic/>
            <CalendarPic/>
            <BottomPic/>

        </ProjectContainer>
    )
}
