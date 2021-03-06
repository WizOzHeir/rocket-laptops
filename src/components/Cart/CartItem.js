import React from 'react';

export default function CartItem({item, value}) {
  const { id, title, price, img, total, count } = item;
  const {increment, decrement, removeItem } = value;
  return (
    <div className="row my-3 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
            <img
                src={img}
                style={{width: '5rem', height: '5rem'}}
                className="img-fluid"
                alt="Product Appearance"
            />
        </div>

        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">product:&nbsp;</span>
            <span>{title}</span>
        </div>

        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">price:&nbsp;</span>
            <span>${price}</span>
        </div>

        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
            <div className="d-flex justify-content-center">
                <div>
                    <span className="cart-quantity-btn mx-1" onClick={() => decrement(id)}>&minus;</span>
                    <span className="cart-quantity-value">{count}</span>
                    <span className="cart-quantity-btn mx-1" onClick={() => increment(id)}>+</span>
                </div>
            </div>
        </div>

        <div className="col-10 mx-auto col-lg-2">
            <div className="cart-icon" onClick={() => removeItem(id)}>
                <i className="fas fa-trash"></i>
            </div>
        </div>

        <div className="col-10 mx-auto col-lg-2">
            <strong>${total}</strong>
        </div>
        <hr className="d-lg-none" />
    </div>
  );
};
