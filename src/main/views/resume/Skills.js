import React from "react";
import glamorous from "glamorous";

export default function Skills(props) {
    const Section = glamorous.div({
        display: "flex",
    });

    const Container = glamorous.div({
        display: "flex",
        flexDirection: "column",
        padding: "25px",

    });

    const Header = glamorous.p({
        display: "inline",
        fontWeight: "300",
        color: "#201D1A",
        margin: "0",
    });

    const Skills = glamorous.h5({
        fontWeight: "600",
        color: "#201D1A",
        fontSize: "1.3em",
        margin: "0",
        marginBottom: "20px",
    });

    const Underline = glamorous.p({
        borderBottom: "4px solid #FF4057",
        width: "50px",
    })

    return (
        <div>
            <Section>
                <Container>
                    <Header>Frontend</Header>
                    <Underline/>
                    <Skills>Javascript</Skills>
                    <Skills>HTML/CSS</Skills>
                    <Skills>React</Skills>
                </Container>
                <Container>
                    <Header>Backend</Header>
                    <Underline/>
                    <Skills>Express</Skills>
                    <Skills>MongoDB</Skills>
                    <Skills>Mongoose</Skills>
                </Container>
            </Section>
            <Section>
                <Container>
                    <Header>Data Analysis</Header>
                    <Underline/>
                    <Skills>SPSS</Skills>
                    <Skills>R</Skills>
                </Container>
                <Container>
                    <Header>Design</Header>
                    <Underline/>
                    <Skills>Sketch</Skills>
                    <Skills>Illustrator</Skills>
                </Container>
            </Section>
        </div>
    )
}
