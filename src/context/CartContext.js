import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      //Check if the product already exists in the cart
      const existingProduct = state.find(item => item.title === action.product.title);
      if (existingProduct) {
        //If the product exists, increase the quantity
        return state.map(item =>
          item.title === action.product.title 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
        );
      }
      //If the product doesn't exist, add it to the cart with quantity 1
      return [...state, { ...action.product, quantity: 1 }];
    case 'REMOVE_FROM_CART':
      return state.filter(item => item.title !== action.title);
    case 'UPDATE_QUANTITY':
      return state.map(item =>
        item.title === action.title ? { ...item, quantity: action.quantity } : item
      );
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);



