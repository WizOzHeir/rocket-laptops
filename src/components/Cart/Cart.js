import React, { Component } from 'react';
import Title from '../Title';
import EmptyCart from './EmptyCart';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';
import { ProductConsumer } from '../../context';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
            {(value) => {
                const { cart } = value;
                if(cart.length > 0) {
                    return (
                        <React.Fragment>
                            <Title   
                                name="your"
                                title="cart"
                                backgroundColor="rgba(251, 183, 16, .2)"
                            />
                            <CartColumns />
                            <CartList value={value} />
                            <CartTotals value={value} history={this.props.history} />
                        </React.Fragment>
                    );
                } else {
                    return (
                        <EmptyCart />
                    );
                }
            }}
        </ProductConsumer>
      </section>
    );
  };
};
