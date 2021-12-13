import styled from "styled-components";
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
   {
    padding: 24px;
    background-color: ${(props) => props.theme.backgroundGrey};
  }
`;
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
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
      min-width: ${(props) => (props.square ? "40px" : "160px")};
      height: ${(props) => (props.square ? "40px" : "55px")};
      border: none;
      border-radius: 3px;
      user-select: none;
      padding: 0 7px;
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
