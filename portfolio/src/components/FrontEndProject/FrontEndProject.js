import React from "react";
import coloumSize from "../../constants/colSize";
import CardContainer from "../CardContainer/CardContaier";
import { frontEntProjectContent } from "./FrontEndProjectContent";
import './styles.css';

const FrontEndProject = () => {
    return (
        <CardContainer type='large' heading='Front-end Development Projects' colSize={coloumSize.threeColumns} jsx={frontEntProjectContent}>
        </CardContainer>
    );
}

export default FrontEndProject;