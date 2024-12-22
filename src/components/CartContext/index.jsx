import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export default function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
  
    // Adds to cart
    const addToCart = (product) => {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === product.id);
  
        if (existingItem) {
          // Update number of items if more of the same is added
          return prevItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
  
        // Adds new product
        return [...prevItems, { ...product, quantity: 1 }];
      });
    };
  
    // Calculates total price
    const getTotal = () =>
      cartItems.reduce(
        (total, item) => total + item.discountedPrice * item.quantity,
        0
      );
  
    // Clears cart
    const clearCart = () => setCartItems([]);
  
    // Removes a product from cart
    const removeItemFromCart = (itemId) => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };
  
    return (
      <CartContext.Provider value={{cartItems, addToCart, removeItemFromCart, getTotal, clearCart}}>
        {children}
      </CartContext.Provider>
    );
  }