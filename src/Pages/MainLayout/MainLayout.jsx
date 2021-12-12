import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer";
import { BackToTop } from "../../Components/BackToTop/BackToTop";
import styled from "styled-components";

export const MainLayout = ({ children }) => (
  <MainContainer>
    <Header />
    <ContentContainer>{children}</ContentContainer>
    <Footer />
    <BackToTop />
  </MainContainer>
);

const MainContainer = styled.div`
   {
    width: 100%;
    background-color: $background;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;
const ContentContainer = styled.div`
   {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 32px;
    height: 100%;
    min-height: calc(100vh - 281px);
    padding: 12px;
    @media (min-width: 768px) {
      padding: 0;
  }
`;
