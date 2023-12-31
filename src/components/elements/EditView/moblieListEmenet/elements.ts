import styled from 'styled-components';

export const SingleElementWrapper = styled.li<{ $isOpen?: boolean }>`
  width: 100%;
  margin: auto;
  max-height: ${(props) => (props.$isOpen ? '800px' : '50px')};
  height: 100%;
  position: relative;
  margin: 20px 0;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  transition: 600ms;
  overflow: hidden;
  cursor: pointer;

  background: linear-gradient(
    153.47deg,
    rgba(255, 255, 255, 0) -341.94%,
    #14101d 95.11%
  );

  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(165, 118, 214, 1) 0%,
    rgba(100, 18, 185, 1) 100%
  );

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

export const DeleteButton = styled.button`
  padding: 10px 20px;
  margin: 20px 0;
  border: 2px solid #33bbcf;
  border-radius: 10px;
  color: #33bbcf;
  background: transparent;
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
  color: #def9fa;
  &:focus {
    color: #00f6ff;
  }
  transition: 500ms;
  text-align: center;
`;

export const SingleTextArea = styled.textarea`
  width: 100%;
  border: none;
  background: transparent;
  color: #def9fa;
  resize: none;
  &:focus {
    color: #00f6ff;
  }
  transition: 500ms;
  text-align: center;
`;
