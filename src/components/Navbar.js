import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonContainer } from './Button';
import { ProductConsumer } from '../context';
import logo from '../logo.svg';

export default class Navbar extends Component {
  render() {
    return (
        <ProductConsumer>
            {(value) => {
                const{ cart } = value;
                const cartIconColor = cart.length > 0 ? 'var(--bg-default)' : 'var(--text-color)';
                const cartItemsNumber = cart.length > 0 ? 'cart-full' : 'cart-empty';

                return (
                    <nav className="navbar navbar-expand-sm custom-navbar px-sm-5">
                        <NavLink to="/">
                            <img src={logo} alt="Rocket Laptops Logo" className="navbar-brand" />
                        </NavLink>
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item ml-1">
                                <NavLink to="/" className="nav-link">Store</NavLink>
                            </li>
                        </ul>
                        <NavLink to="/cart" className="ml-auto">
                            <ButtonContainer>
                                <span className="mr-2" style={{color: cartIconColor, position: 'relative'}}>
                                    <span className={cartItemsNumber}>{cart.length}</span>
                                    <i className="fas fa-cart-plus" />
                                </span>
                                Cart
                            </ButtonContainer>
                        </NavLink>
                    </nav>
                );
            }}
        </ProductConsumer>
    );
  };
};
