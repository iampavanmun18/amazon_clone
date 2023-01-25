import React from 'react'
import './NavBar.css'
import amazon_logo from '../../assets/amazon_logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'; import { Avatar, Badge } from '@mui/material';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <NavLink to="/"><img  src={amazon_logo} alt="Amazon Logo" /></NavLink>
          </div>
          <div className="nav_searchbaar">
            <input type="text" name="" id="" />
            <div className="search_icon">
              <SearchIcon id='search' />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <NavLink to="/signin">Sign In</NavLink>
          </div>
          <div className="cart_btn">
            <Badge badgeContent={9} color="primary">
              <ShoppingCartOutlinedIcon id='icon' />
            </Badge>
            <p>Cart</p>
          </div>
          <Avatar className='avtar'/>
        </div>
      </nav>
    </header>
  )
}

export default NavBar