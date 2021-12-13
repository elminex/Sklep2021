import { useEffect, useState } from "react";
import { StyledButton } from "./../StyledButton/StyledButton";
import styled from "styled-components";

export const BackToTop = () => {
  const [active, setActive] = useState(false);
  const handleScroll = () =>
    window.pageYOffset > 100 ? setActive(true) : setActive(false);
  let interval;
  const scrollStep = () =>
    window.pageYOffset === 0
      ? clearInterval(interval)
      : window.scroll(0, window.pageYOffset - 50); // sscroll step in px = 30

  const scrollToTop = () => {
    interval = setInterval(scrollStep, 15); // delay in ms = 15
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <BackToTopButton
      square
      type="button"
      onClick={() => scrollToTop()}
      active={active}
    >
      Top
    </BackToTopButton>
  );
};

const BackToTopButton = styled(StyledButton)`
  opacity: ${(props) => (props.active ? 1 : 0)};
  position: fixed;
  bottom: 30px;
  right: 30px;
`;
