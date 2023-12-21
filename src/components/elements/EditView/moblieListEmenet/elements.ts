import styled from 'styled-components';

export const SingleElementWrapper = styled.li<{ $isOpen?: boolean }>`
  width: 100%;
  margin: auto;
  max-height: ${(props) => (props.$isOpen ? '800px' : '50px')};
  height: 100%;
  position: relative;
  border: 2px solid black;
  margin: 20px 0;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  transition: 400ms;
  overflow: hidden;
`;

export const WordsFieldWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const Column = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const ExampleSentencesFieldWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SingleTextAreWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0;
`;
