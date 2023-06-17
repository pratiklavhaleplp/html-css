import React from "react";
import NavBar from "../NavBar/NavBar";
import { heading } from "../SuperParent/superParentContent";
import { AiOutlineDownload } from "react-icons/ai";
import './styles.css';
const Header = () => {
    return (<div className='header-parent'>
        <NavBar />
        <div className="dummy-height"></div>
        <>{heading}</>
        <div className="header-buttons">
            <a className="resume-button" href="https://dl.dropboxusercontent.com/1/view/04ojo1dy3vb9rxg/Apps/pratikLavhaleResumeDownload/Pratik_Lavhale_Resume.pdf"><span className="resume-text-style">Resume</span><span><AiOutlineDownload size='1x' className="icon-fix" /></span></a>
        </div>
    </div>)
}

export default Header;