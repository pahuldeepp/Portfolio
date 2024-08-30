import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import git from "../../assets/git.svg";  // Import GitHub logo

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    menuRef.current.classList.add('opened'); // Add the 'opened' class when opening the sidebar
    setIsSidebarOpen(true); // Set sidebar state to open
  };
  
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    menuRef.current.classList.remove('opened'); // Remove the 'opened' class when closing the sidebar
    setIsSidebarOpen(false); // Set sidebar state to closed
  };

  const handleMenuClick = (menuItem) => {
    if (menuItem === "contact") {
      // Handle the LinkedIn click separately
      window.open("https://www.linkedin.com/in/pahuldeep-singh-b7aa22181", "_blank");
    } else {
      // For other menu items, set the menu state and close the menu
      setMenu(menuItem);
      closeMenu();
    }
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="logo" className="logo"/>
      {!isSidebarOpen && <img src={menu_open} onClick={openMenu} alt="Open menu" className='nav-mob-open'/>}
      <ul className="nav-menu">
        {["home", "about", "services", "contact"].map(item => (
          <li key={item}>
            <AnchorLink href={`#${item}`} offset={50} className="anchor-link">
              <p onClick={() => handleMenuClick(item)}>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
            </AnchorLink>
            {menu === item ? <img src={underline} alt="underline" /> : null}
          </li>
        ))}
      </ul>
      <ul ref={menuRef} className="nav-menu-mobile">
        <img src={menu_close} onClick={closeMenu} alt="Close menu" className='nav-mob-close'/>
        {["home", "about", "services", "contact"].map(item => (
          <li key={item}>
            <AnchorLink href={`#${item}`} className="anchor-link">
              <p onClick={() => handleMenuClick(item)}>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
            </AnchorLink>
            {menu === item ? <img src={underline} alt="underline" /> : null}
          </li>
        ))}
      </ul>
      <div className="nav-connect">
        {/* Ensure the anchor covers more area */}
        <a href="https://github.com/pahuldeepp" target="_blank" className="git-link">
          {/* Increase the div size to include the cream area */}
          <div className="git-container" style={{ padding: '10px', display: 'inline-block' }}>
            <img src={git} alt="GitHub" className="git-logo"/>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
