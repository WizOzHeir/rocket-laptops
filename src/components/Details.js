import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
          {(value) => {
            const { id, title, img, company, price, info, inCart } = value.detailProduct;
            return (
                <div className="container py-5">
                    <div className="row">
                        <div className="col-10 mx-auto text-center my-5">
                            <h1>{title}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <img src={img} alt="Product Appearance" className="img-fluid" />
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                            <h2>model:&nbsp;{title}</h2>
                            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                made by:&nbsp;
                                <span className="text-uppercase">
                                    {company}
                                </span>
                            </h4>
                            <h4>
                                <strong style={{color: 'var(--bg-default)'}}>
                                    price:&nbsp;<span>$</span>{price}
                                </strong>
                            </h4>
                            <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                some info about product
                            </p>
                            <p className="text-muted lead mb-4">
                                {info}
                            </p>
                            <div className="d-flex justify-content-around">
                                <Link to="/">
                                    <ButtonContainer>
                                        back to products
                                    </ButtonContainer>
                                </Link>
                                <ButtonContainer
                                    cart
                                    disabled={inCart}
                                    onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}
                                >
                                    {inCart ? "inCart" : "add to cart"}
                                </ButtonContainer>
                            </div>
                        </div>
                    </div>
                </div>
            );
          }}
      </ProductConsumer>
    )
  }
};
