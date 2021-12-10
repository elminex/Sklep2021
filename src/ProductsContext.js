import { createContext, useEffect, useState } from 'react';
import Products from './MockData/MOCK_DATA__SMALL.json'

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [data, setData] = useState();
  useEffect(() => {
    setData(Products)
  },[])
  const { Provider } = ProductsContext;
  return (
    <Provider value={data}>
      {children}
    </Provider>
  )
}