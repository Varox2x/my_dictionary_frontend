import styled from 'styled-components';
import breakpoints from '../../../settings/css/breakpoints';

export const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  height: 100vh;
  position: relative;
  overflow: auto;
  padding-top: 70px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const SingleElementWrapper = styled.li<{ $height?: boolean }>`
  width: 100%;
  margin: auto;
  max-height: ${(props) => (props.$height ? '50px' : '400px')};
  height: 100%;
  position: relative;
  border: 2px solid black;
  margin: 20px 0;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
  transition: 400ms;
  flex-direction: column;
  overflow: hidden;
`;

export const Row = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 50px;
  flex-direction: row;
`;

export const WordListActionWrapper = styled.div`
  position: absolute;
  right: 50px;
  top: 10px;
  height: 20px;
  width: 20px;
  display: flex;
  flex-direction: row;
`;
export const ShowDetailsButton = styled.button`
  height: 20px;
  width: 20px;
`;

export const ResourceWordWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 50%;
  border: 1px solid purple;
`;

export const Input = styled.input<{ $width: string }>`
  height: 100%;
  width: ${(props) => props.$width};
  border: none;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: none;
  margin-left: 20px;
  &:focus {
    border: 1px solid pink;
  }
`;

export const DeteleButton = styled.button`
  background: red;
  opacity: 0;
  border-radius: 10px;
  border: none;
`;
export const AddButton = styled.button``;
export const DeleteWordButton = styled.button``;

export const WordInputWrapper = styled.div`
  margin-right: 20px;
  &:hover {
    button {
      color: white;
      opacity: 100%;
    }
  }
`;

export const List = styled.ul`
  width: 100%;
`;

export const CreateWordContainer = styled.div`
  position: fixed;
  top: 10%;
  right: 10%;
  left: 10%;
  bottom: 10%;
  border: 2px solid red;
  background: pink;
`;

export const CreateWordWrapper = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;
