import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/original.svg';

const Header = () => (
  <div className='header'>
    <Link to="/">
      <Logo className='logo'/>
    </Link>
    <div className='options'>
      <Link className='options' to='/shop'>
        SHOP
      </Link>
      <Link className='options' to='/shop'>
        CONTACT
      </Link>
    </div>
  </div>
)

export default Header;
