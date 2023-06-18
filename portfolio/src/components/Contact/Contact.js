import React from "react";
import coloumSize from "../../constants/colSize";
import CardContainer from "../CardContainer/CardContaier";
import './styles.css';
import { contactDetails } from "./ContactContaints";

const Contact = () => {
    return (<CardContainer type='large' heading='Contact' colSize={coloumSize.twoColumns} jsx={contactDetails}>
    </CardContainer>)
}

export default Contact;