import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from './Pages/MainPage/MainPage.jsx';
import { Cart } from './Pages/Cart/Cart';
import { Faq } from './Pages/Faq/Faq';
import { ProductsList } from './Pages/ProductsList/ProductsList';
import { ProductsContextProvider } from './ProductsContext';
import { MainLayout } from './Pages/MainLayout/MainLayout';
import { ThemeProvider} from 'styled-components';
import { theme } from './theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <ProductsContextProvider>
        <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/faq" element={<Faq />} />
            <Route exact path="/list" element={<ProductsList />} />
          </Routes>
          </MainLayout>
        </BrowserRouter>
    </ProductsContextProvider>
    </ThemeProvider>

  )
}