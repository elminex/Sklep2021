import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from './Pages/MainPage/MainPage.jsx';
import { Cart } from './Pages/Cart/Cart';
import { Faq } from './Pages/Faq/Faq';
import { ProductsList } from './Pages/ProductsList/ProductsList';
import { ProductsContextProvider } from './ProductsContext';

export const App = () => {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/list" element={<ProductsList />} />
        </Routes>
      </BrowserRouter>
    </ProductsContextProvider>

  )
}