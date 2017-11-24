import React from "react";
import glamorous from "glamorous";

import Header from "./Header";
import Skills from "./Skills";
import Job from "./Job";

export default function Resume() {
    const mediaQueries = {
        small: "@media screen and (max-width: 991px)"
    }

    const Headline = glamorous.div({
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "25px",
        color: "#FF4057",
        height: "155px",
        [mediaQueries.small]: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }
    });

    const MyName = glamorous.h1({
        fontSize: "3em",
        fontWeight: "300",
        letterSpacing: "5",
    });

    const ContactContainer = glamorous.div({
        display: "flex",
        width: "30%",
        alignItems: "center",
        justifyContent: "space-around",
    });

    const MainBody = glamorous.div({
        display: "flex",
        flexWrap: "wrap",
    })

    const JobsContainer = glamorous.div({
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#201D1A",
        width: "60%",
        height: "500px",
        overflow: "scroll",
        [mediaQueries.small]: {
            width: "100%",
        }
    });

    const SkillsContainer = glamorous.div({
        display: "flex",
        justifyContent: "space-around",
        width: "40%",
        height: "500px",
        [mediaQueries.small]: {
            width: "100%",
        }
    });

    const RecentExperience = glamorous.h1({
        transform: "rotate(90deg)",
        color: "#4A4A4A",
    })


    return (
        <div>
            <Header></Header>
            <Headline>
                <MyName>Kit Masaracchia</MyName>
                <ContactContainer>
                    <i className="fa fa-3x fa-envelope"></i>
                    <i className="fa fa-4x fa-mobile"></i>
                </ContactContainer>
            </Headline>
            <MainBody>
                <SkillsContainer>
                    <Skills/>
                </SkillsContainer>
                <JobsContainer>
                    {/* <RecentExperience>RECENT EXPERIENCE</RecentExperience> */}
                    <Job></Job>
                </JobsContainer>
            </MainBody>
        </div>
    )
}
