/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./navbar.css"
import img1 from "./amazon_png25.png";
import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Avatar } from '@mui/material';
const Navbar = () => {

  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <img src={img1} alt="" />
          </div>
          <div className='nav_searchbaar'>
            <input type='text' placeholder='Search Your Products' name="'" id='' />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
          </div>

        </div>
        <div className="right">
          <div className="nav_btn">
            <a href="">Sigin</a>
          </div>
          <div className="cart_btn">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon id="icon"/>
            </Badge>
            <p>Cart</p>
          </div>
          <Avatar className='Avatar'></Avatar>
        </div>
      </nav>
    </header>
  )
}

export default Navbar