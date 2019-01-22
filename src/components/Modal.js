import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';

export default class Modal extends Component {
  render() {
    return (
     <ProductConsumer>
         {(value) => {
             const { isModalOpened, closeModal} = value;
             if(isModalOpened) {
                const { img, price, title } = value.modalProduct;
                 return (
                     <ModalContainer>
                        <div className="container">
                            <div className="row">
                                <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize modal-inner p-4">
                                    <h5 className="text-title text-uppercase text-muted mt-3 mb-4">
                                        item in the cart
                                    </h5>
                                    <img src={img} className="img-fluid mb-2" alt="Product Appearance" />
                                    <h5>{title}</h5>
                                    <h5 className="text-muted mb-4">
                                        price&nbsp;:&nbsp;${price}
                                    </h5>
                                    <div className="d-flex justify-content-around">
                                        <Link to="/">
                                            <ButtonContainer onClick={() => closeModal()}>
                                                store
                                            </ButtonContainer>
                                        </Link>
                                        <Link to="/cart">
                                            <ButtonContainer cart onClick={() => closeModal()}>
                                                cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </ModalContainer>
                 );
             }
         }}
     </ProductConsumer>
    );
  };
};


const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

    .modal-inner {
        background: var(--white-color);
    }
`;
