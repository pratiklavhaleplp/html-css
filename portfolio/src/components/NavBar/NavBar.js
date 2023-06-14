import React, { useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './styles.css'
import { userActions } from "../../store";

const NavBar = () => {
  const navBarItems = ['HOME', 'CAREER', 'SKILLS', 'PROJECTS', 'ACADEMICS', 'CONTACT'];
  const dispatch = useDispatch();
  const address = useSelector(state => state.address);
  const domRefs = useMemo(() => document.getElementsByClassName('heading'),
    []);

  const handelNavigation = (ele) => {
    let targetSection = [];
    switch (ele) {
      case 'HOME': {
        targetSection = document.getElementsByClassName('header-parent')[0];
        targetSection.scrollIntoView({ behavior: "smooth" });
        dispatch(userActions.changeAddress("Address changed to hydrebad..."));
      }
        break;
      case 'CAREER': {
        domRefs[0].scrollIntoView({ behavior: "smooth" });
      }
        break;
      case 'SKILLS': {
        domRefs[1].scrollIntoView({ behavior: "smooth" });
      }
        break;
      case 'PROJECTS': {
        domRefs[2].scrollIntoView({ behavior: "smooth" });
      }
        break;
      case 'ACADEMICS': {
        domRefs[3].scrollIntoView({ behavior: "smooth" });
      }
        break;
      case 'CONTACT': {
        domRefs[4].scrollIntoView({ behavior: "smooth" });
      }
        break;
      default: {
        targetSection = document.getElementsByClassName('header-parent')[0];
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }


  return (
    <div className="nav-bar-top-fix">
      <div className="nav-bar">
        {
          navBarItems.map((ele, index) => <div className='flex-item' key={index} onClick={() => handelNavigation(ele)}>{ele}</div>)
        }
      </div>
    </div>
  )
}

export default NavBar;