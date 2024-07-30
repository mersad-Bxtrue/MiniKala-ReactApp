import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar"
import Advertising from "./Advertising"
import Products from './Products';
import ShoppingCartDetails from './ShoppingCartDetails';

export default function App() {
  const [cartItem, setCartItem] = useState([]);
  const [productQuantities, setProductQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  function handleAddProduct(product) {
    setCartItem((prevCart) => [...prevCart, product]);

    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product.id]: (prevQuantities[product.id] || 0) + 1,
    }));
  }

  function handleProductQuantityChange(productId, delta) {
    setProductQuantities((prevQuantities) => {
      const newQuantity = (prevQuantities[productId] || 0) + delta;

      if (newQuantity <= 0) {
        setCartItem((prevCart) => prevCart.filter((item) => item.id !== productId));
        const { [productId]: _, ...newQuantities } = prevQuantities;
        return newQuantities;
      }

      return {
        ...prevQuantities,
        [productId]: newQuantity,
      };
    });
  }

  function handleClearCart() {
    setCartItem([]);
    setProductQuantities({});
  }

  useEffect(() => {
    const newTotalPrice = cartItem.reduce((total, item) => {
      const quantity = productQuantities[item.id] || 0;
      return total + item.price * quantity;
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItem, productQuantities]);

  const totalProducts = Object.values(productQuantities).reduce((total, quantity) => total + quantity, 0);

  return (
    <>
      <Navbar totalProducts={totalProducts} />
      <header>
        <Advertising />
      </header>
      <main className="app-main">
        <ShoppingCartDetails
          cartItem={cartItem}
          productQuantities={productQuantities}
          onProductQuantityChange={handleProductQuantityChange}
          totalPrice={totalPrice}
          onClearCart={handleClearCart} // Pass handleClearCart as prop
        />
        <Products
          cartItem={cartItem}
          onAddProduct={handleAddProduct}
          productQuantities={productQuantities}
          onProductQuantityChange={handleProductQuantityChange}
        />
      </main>
    </>
  );
}
