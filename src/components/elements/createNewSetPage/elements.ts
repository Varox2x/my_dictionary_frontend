import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Form = styled.form`
  height: 300px;
  max-width: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  background: #6412b9;

  -webkit-box-shadow: 0px 18px 62px -8px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 18px 62px -8px rgba(66, 68, 90, 1);
  box-shadow: 0px 18px 62px -8px rgba(66, 68, 90, 1);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Button = styled.button<{ $isDisabled?: boolean }>`
  border: none;
  background: transparent;
  margin-left: 10px;
  ${(props) => (props.$isDisabled ? 'opacity: 0.3;' : '')}
`;
export const Input = styled.input<{ $isText?: boolean }>`
  text-align: center;
  border: none;
  box-sizing: border-box;
  background: transparent;
  color: white;
  @media only screen and (max-width: 435px) {
    width: 70%;
  }
  font-size: 24px;
  transition: 700ms;
  border-bottom: 2px solid ${(props) => (props.$isText ? '#48CAE4' : 'white')};
  -webkit-autofill,
  -webkit-autofill:hover,
  -webkit-autofill:focus,
  -webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: #ffffff;
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px #23232329;
  }
`;

export const Error = styled.p`
  margin-top: 20px;
  color: red;
`;
