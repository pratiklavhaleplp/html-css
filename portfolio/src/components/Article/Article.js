import React from "react";
import BackEndEndProject from "../BackEndEndProject/BackEndEndProject";
import Career from "../Career/Career";
import FrontEndProject from "../FrontEndProject/FrontEndProject";
import Skills from "../Skills/Skills";
import './styles.css';

const Article = () => {
    return (<div className='article-contianer'>
        <Career />
        <Skills />
        <FrontEndProject />
        <BackEndEndProject />
    </div>);
}

export default Article;