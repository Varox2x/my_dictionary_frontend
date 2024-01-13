import styled from 'styled-components';

export const SingleElementWrapper = styled.li<{ $isOpen?: boolean }>`
  width: 100%;
  margin: auto;
  min-height: 50px;
  position: relative;
  margin: 20px 0;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  transition: 1000ms;
  overflow: hidden;
  cursor: pointer;

background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(23,126,137,1) 0%, rgba(36,115,162,1) 43%, rgba(83,77,252,1) 100%);
  );
background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(96,163,230,1) 0%, rgba(168,233,240,1) 100%);


  -webkit-box-shadow: 0px 7px 14px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 7px 14px 0px rgba(66, 68, 90, 1);
  box-shadow: 0px 7px 14px 0px rgba(66, 68, 90, 1);
`;

export const WordsFieldWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const Column = styled.div<{ $isOpen?: boolean; $isBorder?: boolean }>`
  width: 50%;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: 600ms;
  margin-bottom: 10px;
  padding-bottom: 10px;
  &:after {
    content: '';
    position: absolute;
    width: 1px;
    background: #ffffff;
    right: 0;
    top: 10px;
    opacity: 0.3;
    ${(props) => (props.$isOpen ? 'bottom: 15px' : 'height: 30px')};
    display: ${(props) => (props.$isBorder ? 'block' : 'none')};
  }
  &:before {
    content: '';
    position: absolute;
    height: 1px;
    background: #ffffff;
    right: 15px;
    left: 15px;
    bottom: 0;
    opacity: 0.3;
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

export const ExampleSentencesFieldWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

export const SingleTextAreWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
`;

export const SingleInput = styled.input`
  width: 80%;
  border: none;
  background: transparent;
  color: #000000;
  &:focus {
    color: #000000;
  }
  font-weight: 600;
  transition: 500ms;
  text-align: center;
`;

export const SingleTextArea = styled.textarea`
  width: 100%;
  border: none;
  background: transparent;
  color: #222222;
  resize: none;
  &:focus {
    color: #222222;
  }
  transition: 500ms;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
`;

export const ErrorContent = styled.p`
  margin-top: 10px;
  color: red;
  text-align: center;
`;
