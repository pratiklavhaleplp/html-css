import React from "react";
import Academics from "../Academics/Academics";
import BackEndEndProject from "../BackEndEndProject/BackEndEndProject";
import Career from "../Career/Career";
import Contact from "../Contact/Contact";
import FrontEndProject from "../FrontEndProject/FrontEndProject";
import Skills from "../Skills/Skills";
import './styles.css';

const Article = () => {
    return (<div className='article-contianer'>
        <Career />
        <Skills />
        <FrontEndProject />
        <BackEndEndProject />
        <Academics />
        <Contact />
    </div>);
}

export default Article;