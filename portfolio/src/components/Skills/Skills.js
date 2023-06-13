import React from "react";
import './styles.css';
import CardContainer from "../CardContainer/CardContaier";
import coloumSize from "../../constants/colSize";
import {
    technicalSkills,
    softSkills,
    tools
} from './skillContent'
const content = <>
    <CardContainer type='medium' heading='Technical Skills' jsx={technicalSkills} />
    <CardContainer type='medium' heading='Soft Skills' jsx={softSkills} />
    <CardContainer type='medium' heading='Tools' jsx={tools} />
</>

const Skills = () => {
    return (
        <CardContainer type='large' jsx={content} heading='Skills and Proficiencies' colSize={coloumSize.threeColumns}>
        </CardContainer>
    )
}

export default Skills;