import React from 'react';

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
        <div className="row cart-custom-row">
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase mb-0"></p>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase mb-0">name of product</p>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase mb-0">price</p>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase mb-0">quantity</p>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase mb-0">remove</p>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase mb-0">item total</p>
            </div>
        </div>
    </div>
  );
};
