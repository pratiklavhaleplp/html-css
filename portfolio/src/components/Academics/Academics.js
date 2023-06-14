import React from "react";
import coloumSize from "../../constants/colSize";
import CardContainer from "../CardContainer/CardContaier";
import './styles.css';

const Academics = () => {
    return (<CardContainer type='large' heading='Academics' colSize={coloumSize.threeColumns}>
    </CardContainer>)
}

export default Academics;