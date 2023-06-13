import React from "react";
import coloumSize from "../../constants/colSize";
import CardContainer from "../CardContainer/CardContaier";
import './styles.css';

const BackEndEndProject = () => {
    return (
        <CardContainer type='large' heading='Back-end Development Projects' colSize={coloumSize.threeColumns}>
        </CardContainer>
    );
}

export default BackEndEndProject;