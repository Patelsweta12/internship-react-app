import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import { IconContext } from "react-icons";
import { BiMenu, BiX } from "react-icons/bi";
import {Button} from '../Globalstyles';
import React, {useState, useEffect} from 'react';

// styles
import './Navbar.css'

import 
{
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MenuIcon,
    Menu,
    MenuItem,
    MenuLink,
    MenuItemBtn,
    MenuLinkBtn,
} from './Navbar.styles';

export default function Navbar() {
  const { color } = useTheme()
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () =>{
      if(window.innerWidth<= 1000){
          setButton(false);
      }else{
          setButton(true);
      }
  }

  useEffect(() => {
      showButton();
  }, []);
  window.addEventListener('resize', showButton);

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon/>
              Trip Planner
            </NavLogo>
            <MenuIcon onClick={handleClick}>
              {click ? <BiX/> : <BiMenu/>}
            </MenuIcon>

            <Menu onClick={handleClick} click={click}>
              <MenuLink onClick={closeMenu} to="/">Home</MenuLink>
              <MenuLink onClick={closeMenu} to="/search">Search Trip</MenuLink>
              <MenuLink onClick={closeMenu} to="/create">Create Trip</MenuLink>
            </Menu>
            </NavbarContainer>
      </nav>
    </div>
  )
}
