import React from "react";
import coloumSize from "../../constants/colSize";
import CardContainer from "../CardContainer/CardContaier";
import { projectContent } from "./FrontEndProjectContent";
import './styles.css';

const FrontEndProject = () => {
    return (
        <CardContainer type='large' heading='Front-end Development Projects' colSize={coloumSize.threeColumns} jsx={projectContent}>
        </CardContainer>
    );
}

export default FrontEndProject;