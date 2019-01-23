import React from 'react';
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButton';

export default function CartTotals({value, history}) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 col-sm-8 text-capitalize text-left p-0">
                    <Link to="/">
                        <button
                            className="cart-clear-btn"
                            onClick={() => clearCart()}   
                        >
                            clear cart
                        </button>
                    </Link>
                </div>
                <div className="col-10 mt-3 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <h5>
                        <span className="text-title">subtotal:&nbsp;</span>
                        <strong>${cartSubTotal}</strong>
                    </h5>

                    <h5>
                        <span className="text-title">tax:&nbsp;</span>
                        <strong>${cartTax}</strong>
                    </h5>

                    <h5 className="cart-total">
                        <span className="text-title">total:&nbsp;</span>
                        <strong>${cartTotal}</strong>
                    </h5>

                    <PayPalButton total={cartTotal} clearCart={clearCart} history={history} />
                </div>
            </div>
        </div>
    </React.Fragment>
  );
};
