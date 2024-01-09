import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  position: relative;
  padding-bottom: 30px;
  &::after {
    position: absolute;
    content: '';
    background: black;
    bottom: 0;
    left: 10px;
    right: 10px;
    height: 1px;
  }
`;

export const Title = styled.p`
  text-align: center;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  text-align: center;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
`;
