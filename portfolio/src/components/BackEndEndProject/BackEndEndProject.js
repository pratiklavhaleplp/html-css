import React from "react";
import coloumSize from "../../constants/colSize";
import CardContainer from "../CardContainer/CardContaier";
import { backEndEndProjectContent } from "./BackEndProjectContent";
import './styles.css';

const BackEndEndProject = () => {
    return (
        <CardContainer type='large' heading='Back-end Development Projects' colSize={coloumSize.threeColumns} isCustomElement={true} jsx={backEndEndProjectContent}>
        </CardContainer>
    );
}

export default BackEndEndProject;