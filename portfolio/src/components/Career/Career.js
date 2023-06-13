import React from "react";
import './styles.css'
import CardContainer from "../CardContainer/CardContaier";
import coloumSize from "../../constants/colSize";
import { experties, workExp, collaborativeSkills } from "./careerContent";
const content = <>
    <CardContainer type='medium' heading='Expertise' showIcon={true} jsx={experties} />
    <CardContainer type='medium' heading='Work Experience' showIcon={true} jsx={workExp} />
    <CardContainer type='medium' heading='Collaborative Skills' showIcon={true} jsx={collaborativeSkills} />
</>

const Career = () => {
    return (
        <CardContainer type='large' jsx={content} heading='Professional Summary' colSize={coloumSize.threeColumns}>
        </CardContainer>
    )
}

export default Career;