import React, { useMemo } from "react";
import './styles.css'

const NavBar = () => {
  const navBarItems = ['HOME', 'CAREER', 'SKILLS', 'PROJECTS', 'ACADEMICS', 'CONTACT'];

  const domRefs = useMemo(() => document.getElementsByClassName('heading'),
    [navBarItems.length]);

  const handelNavigation = (ele) => {
    let targetSection = [];
    switch (ele) {
      case 'CAREER': {
        targetSection = domRefs[0];
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
        break;
      case 'SKILLS': {
        targetSection = domRefs[1];
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
        break;
      case 'PROJECTS': {
        targetSection = domRefs[2];
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
        break;
      case 'ACADEMICS': {
        targetSection = domRefs[3];
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
        break;
      case 'CONTACT': {
        targetSection = domRefs[4];
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
        break;
    }
  }


  return (
    <div className="nav-bar">
      {
        navBarItems.map((ele, index) => <div className='flex-item' key={index} onClick={() => handelNavigation(ele)}>{ele}</div>)
      }
    </div>
  )
}

export default NavBar;