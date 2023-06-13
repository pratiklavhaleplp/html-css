import React from "react";
import './styles.css'

const NavBar = () => {
  const navBarItems = ['HOME', 'CAREER', 'SKILLS', 'PROJECTS', 'ACADEMICS', 'CONTACT'];
  return (
    <div className="nav-bar">
      {
        navBarItems.map((ele, index) => <div className='flex-item' key={index} >{ele}</div>)
      }
    </div>
  )
}

export default NavBar;