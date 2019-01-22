import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonContainer } from './Button';
import logo from '../logo.svg';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm custom-navbar px-sm-5">
          <NavLink to='/'>
            <img src={logo} alt="Rocket Laptops Logo" className="navbar-brand" />
          </NavLink>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-1">
							<NavLink to="/" className="nav-link">
									Store
							</NavLink>
            </li>
          </ul>
          <NavLink to='/cart' className="ml-auto">
            <ButtonContainer>
            <span className="mr-2" style={{color: '#6d6d6d'}}>
                <i className="fas fa-cart-plus" />
            </span>
            Cart
            </ButtonContainer>
          </NavLink>
      </nav>
    )
  }
}
