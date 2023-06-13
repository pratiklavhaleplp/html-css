import React from "react";
import NavBar from "../NavBar/NavBar";
import { heading } from "../SuperParent/superParentContent";
import './styles.css';
const Header = () => {
    return (<div className='header-parent'>
        <NavBar />
        <>{heading}</>
    </div>)
}

export default Header;