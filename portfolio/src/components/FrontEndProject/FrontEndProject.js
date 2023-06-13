import React from "react";
import coloumSize from "../../constants/colSize";
import CardContainer from "../CardContainer/CardContaier";
import './styles.css';

const FrontEndProject = () => {
    return (
        <CardContainer type='large' heading='Front-end Development Projects' colSize={coloumSize.threeColumns}>
        </CardContainer>
    );
}

export default FrontEndProject;