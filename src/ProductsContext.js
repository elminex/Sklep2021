import { createContext, useEffect, useState } from 'react';
import Products from './MockData/MOCK_DATA__SMALL.json'

export const ProductsContext = createContext({ products: [], cart: [], setCart: () => { } });

export const ProductsContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setData(Products)
  }, [])
  const { Provider } = ProductsContext;
  return (
    <Provider value={{ products: data, cart: cart, setCart, }}>
      {children}
    </Provider>
  )
}