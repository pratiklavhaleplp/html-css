import React from "react";
import coloumSize from "../../constants/colSize";
import CardContainer from "../CardContainer/CardContaier";
import './styles.css';
import academicContents from "./EducationAndCertificates";

const Academics = () => {
    return (<CardContainer type='large' heading='Academics' colSize={coloumSize.twoColumns} jsx={academicContents}>
    </CardContainer>)
}

export default Academics;