import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import { userActions } from "../../store";

const NavBar = () => {
  const navBarItems = [{ name: 'HOME', hasChild: false }, { name: 'CAREER', hasChild: false }, { name: 'SKILLS', hasChild: false }, { name: 'PROJECTS', hasChild: true }, { name: 'ACADEMICS', hasChild: false }, { name: 'CONTACT', hasChild: false }];
  const dispatch = useDispatch();
  const address = useSelector(state => state.address);
  console.log("Ignore this log this we used for redux implementation : ", address);
  const domRefs = useMemo(() => document.getElementsByClassName('parent-div'),
    []);
  const [showFrontBackEnd, setShowFrontBackEnd] = useState(false);
  console.log(domRefs);
  const handelNavigation = (ele) => {
    let targetSection = [];
    switch (ele) {
      case 'HOME':
        targetSection = document.getElementsByClassName('header-parent')[0];
        targetSection.scrollIntoView({ behavior: "smooth" });
        dispatch(userActions.changeAddress("Address changed to hydrebad..."));

        break;
      case 'CAREER':
        domRefs[0].scrollIntoView({ behavior: "smooth" });

        break;
      case 'SKILLS':
        domRefs[1].scrollIntoView({ behavior: "smooth" });

        break;
      case 'PROJECTS':
        setShowFrontBackEnd(!showFrontBackEnd);
        domRefs[2].scrollIntoView({ behavior: "smooth" });
        break;
      case 'ACADEMICS':
        domRefs[3].scrollIntoView({ behavior: "smooth" });

        break;
      case 'CONTACT':
        domRefs[4].scrollIntoView({ behavior: "smooth" });
        break;
    }
  }


  return (
    <div onMouseLeave={() => setShowFrontBackEnd(false)} className="nav-bar-top-fix">
      <div onMouseLeave={() => setShowFrontBackEnd(false)} className={showFrontBackEnd ? "project-parent" : "display-none"}>
        <div className="project-item"> Front End Projects</div>
        <div className="project-item"> Back End Projects</div>
      </div>
      <div className="nav-bar">
        {
          navBarItems.map((ele, index) => {
            if (!ele.hasChild)
              return <div className="flex-item" key={index} onClick={() => handelNavigation(ele.name)}>
                {ele.name}</div>
            else
              return <div className="flex-item" key={index} onClick={() => handelNavigation(ele.name)}>{ele.name}</div>
          })
        }
      </div>
    </div>
  )
}

export default NavBar;