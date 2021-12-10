import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import { BackToTop } from "../../Components/BackToTop/BackToTop";
import "./MainLayout.scss";

export const MainLayout = ({ children }) => (
  <div className="Main-container">
    <Header />
    <div className="Content-container">{children}</div>
    <Footer />
    <BackToTop />
  </div>
);
