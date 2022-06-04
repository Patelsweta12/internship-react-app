import { useTheme } from '../hooks/useTheme'
import { BiMenu, BiX } from "react-icons/bi";
import React, {useState} from 'react';

// styles
import './Navbar.css'

import 
{
    NavbarContainer,
    NavLogo,
    NavIcon,
    MenuIcon,
    Menu,
    MenuLink
} from './Navbar.styles';

export default function Navbar() {
  const { color } = useTheme()
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

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
