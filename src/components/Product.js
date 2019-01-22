import React, { Component } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-12 mx-auto col-md-6 col-lg-4 my-3">
        <ProductConsumer>
            {(value) => {
                return (
                    <div className="card">
                        <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                            <Link to="/details">
                                <img src={img} alt="Product Appearance" className="card-img-top" />
                            </Link>
                    
                        </div>      
                        <div className="card-footer d-flex flex-column align-items-end">
                            <p className="card-footer-title align-self-center mb-0">
                                {title}
                            </p>
                            <h5 className="font-italic mb-0">
                                <span className="mr-1">$</span>
                                {price}
                            </h5>
                            <button
                                className="cart-btn"
                                disabled={inCart}
                                onClick={() => {
                                    value.addToCart(id);
                                    value.openModal(id);
                                }}
                            >
                                {inCart ?
                                    <p className="text-capitalize mb-0" disabled>in cart</p> :
                                    <i className="fas fa-cart-plus" />
                                }
                            </button>
                        </div>
                    </div>
                );
            }}
        </ProductConsumer>
      </ProductWrapper>
    )
  }
};

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
    .card {
        border: 0.05rem solid transparent;
        transition: all 500ms ease 0s;
        background-color: var(--bg-gray);
    }

    .card-footer {
        position: relative;
        background: transparent;
        border-top: transparent;
        transition: all 500ms ease 0s;
        overflow: hidden;
    }

    .card-footer-title {
        display: block;
        border-bottom: 3px solid var(--bg-default);
    }

    .img-container {
        position: relative;
        overflow: hidden;
    }


    .card-img-top {
        transition: all 500ms ease 0s;
    }

    .card:hover .card-img-top {
        transform: scale(1.2);
    }

    .cart-btn {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0.2rem 0.4rem;
        background: var(--bg-default) !important;
        border: none;
        border-radius: 0 0.5rem 0 0;
        font-size: 1.4rem;
        color: var(--white-color);
        transform: translate(-100%, 100%);
    }

    .cart-btn:hover {
        color: var(--secondary-color);
        cursor: pointer;
    }

    .card:hover .cart-btn {
        transform: translate(0, 0);
        transition: all 500ms ease 0s;
    }

    &:hover {
        .card {
            border-color: var(--bg-default);
            box-shadow: 2px 2px 50px 0px rgba(0, 0, 0, .2);
        }
        .card-footer {
            background: rgba(253, 180, 16, .1) !important;
        }
    }
`;
