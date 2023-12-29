import styled from 'styled-components';

export const Input = styled.input`
  text-align: left;
  border: none;
  width: 100%;
  background: transparent;
  color: white;

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
