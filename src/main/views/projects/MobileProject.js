import React from "react";
import glamorous from "glamorous";

import Header from "./components/Header";
import Triangle from "./components/Triangle.js";
import MobilePic from "./components/MobilePic.js";

export default function MobileProject(props) {
    /// PHOTOS \\\
    const backgroundImg = require("../../assets/native-weather/background_nativeWeather.png");
    const login = require("../../assets/native-weather/login.png");
    const today = require("../../assets/native-weather/today.png");
    const extended = require("../../assets/native-weather/extended.png");
    ////////////////////////////////////////////

    /// STYLING \\\
    const mediaQueries = {
        small: "@media screen and (max-width: 991px)",
        mobilePics: "@media screen and (max-width: 850px)",
        xsmall: "@media screen and (max-width: 700px)",
    };

    const ProjectContainer = glamorous.div({
        background: `url(${backgroundImg}) no-repeat`,
        paddingTop: "200px",
        width: "100wh",
        height: "auto",
        backgroundSize: "cover",
        paddingBottom: "25px",
        marginBottom: "100px",
    });

    const PicsContainer = glamorous.div({
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "55px",
        [mediaQueries.mobilePics]: {

        }
    });
    ////////////////////////////////////////////


    return (
        <ProjectContainer>
            <Triangle borderWidth="0 2500px 800px 2500px"/>
            <Header
                title={props.title}
                description={props.description}
                goThere={props.goThere}
                goText={props.goText}
                seeCode={props.seeCode}
                seeText={props.seeText}/>
            <PicsContainer>
                <MobilePic imgUrl={login}/>
                <MobilePic imgUrl={today}/>
                <MobilePic imgUrl={extended}/>
            </PicsContainer>
        </ProjectContainer>
    )
}
