import React from "react";
import coloumSize from "../../constants/colSize";
import CardContainer from "../CardContainer/CardContaier";
import './styles.css';

const Contact = () => {
    return (<CardContainer type='large' heading='Contact' colSize={coloumSize.threeColumns}>
    </CardContainer>)
}

export default Contact;