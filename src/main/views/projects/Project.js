import React from "react";
import glamorous from "glamorous";

import Header from "./components/Header";
import Photo from "./components/Photo";

export default function Project(props) {
    const mediaQueries = {
        small: "@media screen and (max-width: 991px)"
    }

    const Container = glamorous.div({
        margin: "300px auto 0 auto",
        width: "90%",
        backgroundColor: "white",
        borderRadius: "2px",
        boxShadow: "rgba(0, 0, 0, 0.4) 0px 1px 3px inset",
        padding: "25px 55px",
        [mediaQueries.small]: {
            marginTop: "200px"
        }
    });

    ////// PHOTOS \\\\\\\
    const dbs1 = require("../../assets/dbs-diary/dbs1.png");

    return (
        <Container>
            <Header
                title={props.title}
                description={props.description}
                goThere={props.goThere}
                goText={props.goText}
                seeCode={props.seeCode}
                seeText={props.seeText}/>
            <Photo url={dbs1}/>

        </Container>
    )
}
