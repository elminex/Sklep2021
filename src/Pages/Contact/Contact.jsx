import styled from "styled-components";
import { Social } from "../../Components/Social/Social";
export const Contact = () => {
  return (
    <Wrapper>
      <StyledForm>
        <StyledLabel htmlFor="fname">
          First name:
          <StyledInput
            requiredtype="text"
            id="fname"
            name="fname"
            placeholder="First Name"
          />
        </StyledLabel>
        <StyledLabel htmlFor="lname">
          Last name:
          <StyledInput
            required
            type="text"
            id="lname"
            name="lname"
            placeholder="Last Name"
          />
        </StyledLabel>
        <StyledLabel htmlFor="message">
          Message:
          <textarea
            required
            id="message"
            name="message"
            maxLength="240"
            placeholder="Enter Your message"
          />
        </StyledLabel>
        <InputButton type="submit" value="Submit" />
      </StyledForm>
      <Social container="contact" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
   {
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundGrey};
  margin-bottom: 32px;
  padding: 16px 0;
`;
const StyledLabel = styled.label`
  padding: 12px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
`;

const StyledInput = styled.input`
  margin-left: 12px;
`;

const InputButton = styled.input`
   {
     {
      color: ${(props) =>
        props.disabled ? props.theme.textBlack : props.theme.textWhite};
      display: inline-block;
      width: 160px;
      height: 55px;
      border: none;
      border-radius: 3px;
      user-select: none;
      padding: 0 7px;
      margin-left: calc(50% - 80px);
      margin-top: 24px;
      font-size: 18px;
      line-height: ${(props) => (props.square ? "40px" : "56px")};
      background-color: ${(props) =>
        props.disabled ? props.theme.backgroundGray : props.theme.yellow};
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        background-color: ${(props) =>
          props.disabled
            ? props.theme.backgroundGray
            : props.theme.backgroundBlack};
      }
    }
  }
`;
