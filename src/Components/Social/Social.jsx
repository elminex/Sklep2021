import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare,
  faPinterestSquare,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

export const Social = ({ container }) => (
  <SocialContainer container={container}>
    <SocialList>
      <SocialItem>
        <SocialLink container={container} href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink container={container} href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink container={container} href="https://www.twitter.com">
          <FontAwesomeIcon icon={faTwitterSquare} />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink container={container} href="https://www.pinterest.com">
          <FontAwesomeIcon icon={faPinterestSquare} />
        </SocialLink>
      </SocialItem>
    </SocialList>
  </SocialContainer>
);

const SocialContainer = styled.div`
  background-color: ${(props) =>
    props.container === ("header" || "contact")
      ? props.theme.backgroundGrey
      : ""};
  text-align: center;
  padding: 32px 0;
  @media (min-width: 768px) {
    display: none;
  }
`;

const SocialList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const SocialItem = styled.li`
  display: inline-block;
`;

const SocialLink = styled.a`
  font-size: 24px;
  color: ${(props) =>
    props.container === "footer"
      ? props.theme.textWhite
      : props.theme.textBlack};
  padding: 16px;
`;
