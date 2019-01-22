import React, { Component } from 'react';
import { storeProducts } from './data';


const ProductContext = React.createContext();

const initialProduct = {
    id: 0,
    img: '',
    price: 0,
    title: ''
};


class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: initialProduct,
    cart: [],
    isModalOpened: false,
    modalProduct: initialProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    this.setProducts();
  };
  
  setProducts = () => {
    let newProducts = [];
    storeProducts.forEach(item => {
        const singleItem = {...item};
        newProducts = [...newProducts, singleItem];
    });
    this.setState(() => {
        return { products: newProducts };
    });
  };

  getItem = (id) => {
    return this.state.products.find(item => item.id === id);
  };

  handleDetail = (id) => {
      const product = this.getItem(id);
      this.setState(() => {
          return { detailProduct: product };
      });
  };

  addToCart = (id) => {
      let copiedProducts = [...this.state.products];
      const index = copiedProducts.indexOf(this.getItem(id));
      const product = copiedProducts[index];
      product.inCart = true;
      product.count = 1;
      product.total = product.price;

      this.setState(() => {
        return {
            products: copiedProducts,
            cart: [...this.state.cart, product]
        }
      }, () => {
          this.addTotals();
      });
  };

  openModal = (id) => {
      const product = this.getItem(id);
      this.setState(() => {
          return {
            modalProduct: product,
            isModalOpened: true
          };
      });
  };

  closeModal = () => {
    this.setState(() => {
        return {
            modalProduct: null,
            isModalOpened: false
        };
    });
  };

  increment = (id) => {
      const updatedCart = [...this.state.cart];
      const selectedProduct = updatedCart.find(product => product.id === id);
      const incrementedProductIndex = updatedCart.indexOf(selectedProduct);
      const incrementedProduct = updatedCart[incrementedProductIndex];
      incrementedProduct.count += 1;
      incrementedProduct.total = incrementedProduct.count * incrementedProduct.price;

      this.setState(() => {
        return {
            cart: [...updatedCart]
        };
      }, () => {
          this.addTotals();
      });
  };

  decrement = (id) => {
    const updatedCart = [...this.state.cart];
    const selectedProduct = updatedCart.find(product => product.id === id);
    const decrementedProductIndex = updatedCart.indexOf(selectedProduct);
    const decrementedProduct = updatedCart[decrementedProductIndex];
    decrementedProduct.count -= 1;

    if(decrementedProduct.count === 0) {
        this.removeItem(id);
    } else {
        decrementedProduct.total = decrementedProduct.count * decrementedProduct.price;
        this.setState(() => {
            return {
                cart: [...updatedCart]
            };
        }, () => {
            this.addTotals();
        });
    }
  };

  removeItem = (id) => {
      const updatedProducts = [...this.state.products];
      const updatedCart = [...this.state.cart].filter(product => product.id !== id);
      const removedProduct = updatedProducts[updatedProducts.indexOf(this.getItem(id))];
      removedProduct.inCart = false;
      removedProduct.count = 0;
      removedProduct.total = 0;

      this.setState(() => {
          return {
            cart: [...updatedCart],
            products: [...updatedProducts]
          };
      }, () => {
          this.addTotals();
      });
  };

  clearCart = () => {
      this.setState(() => {
          return {
              cart: []
          };
      }, () => {
          this.setProducts();
          this.addTotals();
      });
  };

  addTotals = () => {
      const subTotal = this.state.cart.reduce((totalSum, item) => totalSum + item.total, 0);
      const tax = +(subTotal * 0.05).toFixed(1);
      const total = tax + subTotal;
      this.setState(() => {
          return {
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total
          };
      });
  };

  render() {
    return (
      <ProductContext.Provider value={{
            ...this.state,
            handleDetail: this.handleDetail,
            addToCart: this.addToCart,
            openModal: this.openModal,
            closeModal: this.closeModal,
            increment: this.increment,
            decrement: this.decrement,
            removeItem: this.removeItem,
            clearCart: this.clearCart
          }}
      >
          { this.props.children }
      </ProductContext.Provider>
    )
  };
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
