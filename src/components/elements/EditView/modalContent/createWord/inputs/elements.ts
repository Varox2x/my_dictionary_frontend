import styled from 'styled-components';

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  background: transparent;
  color: black;
  resize: none;
  &:focus {
    color: #00f6ff;
  }
  transition: 500ms;
  text-align: center;

  &:not(:placeholder-shown) {
    border: none;
  }

  &:placeholder-shown {
    border: 1px solid black;
  }
`;
//   border: ${(props) => (props.$isValue ? 'none' : '1px solid black')};

export const Input = styled.input<{ $isValue?: boolean }>`
  width: 80%;
  background: transparent;
  color: black;
  &:focus {
    color: #00f6ff;
  }
  transition: 500ms;
  text-align: center;

  &:not(:placeholder-shown) {
    border: none;
  }

  &:placeholder-shown {
    border: 1px solid black;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
`;

export const Button = styled.button``;
