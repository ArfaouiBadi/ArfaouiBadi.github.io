import NavLinkItem from "./NavLinkItem";
import { navLinkItems } from "../constants";
import { NavLinkItemProps } from "../interface";

import CollapsedIcon from "./CollapsedIcon";
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const iconRef = useRef(null);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (isCollapsed) {
      gsap.to(iconRef.current, { rotation: 90, duration: 0.5 , ease: "power2.inOut"});
    } else {
      gsap.to(iconRef.current, { rotation: 45, duration: 0.5, ease: "power2.inOut" });
    }
  }, [isCollapsed]);

  return (
    <nav className={`navbar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="nameHeader">
        <div className="nameLogo">
          <span className="name">Arfaoui Badi</span>
          <br />
          <span className="jobTitle">Full Stack Developer</span>
        </div>
        <div className="collapstedNavBar">
          <button className="toggleButton" onClick={toggleNavbar}>
            <div ref={iconRef}>
              <CollapsedIcon />
            </div>
          </button>
        </div>
      </div>
      <div className={`navLinks ${isCollapsed ? "collapsed" : ""}`}>
        {navLinkItems.map((item: NavLinkItemProps, index: number) => {
          return (
            <NavLinkItem
              key={index}
              icon={item.icon}
              title={item.title}
              path={item.path}
            />
          );
        })}
        
      </div>
    </nav>
  );
};

export default Navbar;