import './App.scss';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from './Pages/MainPage/MainPage.jsx';
import { Cart } from './Pages/Cart/Cart';
import { Shop } from './Pages/Shop/Shop';
import { ProductsContextProvider } from './ProductsContext';
import { MainLayout } from './Pages/MainLayout/MainLayout';
import { ProductPage } from './Pages/ProductPage/ProductPage';
import { Contact } from './Pages/Contact/Contact';


export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProductsContextProvider>
        <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route exact path="/" element={<MainPage />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </ProductsContextProvider>
    </ThemeProvider>

  )
}