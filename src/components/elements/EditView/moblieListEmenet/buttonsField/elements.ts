import styled from 'styled-components';

export const ButtonsFieldWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const SaveButton = styled.button<{ $isDisabled?: boolean }>`
  padding: 10px 20px;
  margin: 20px 0;
  border-radius: 10px;
  color: rgba(11, 41, 72, ${(props) => (props.$isDisabled ? '0.2' : '1')});
  background: transparent;
  border: 2px solid
    rgba(11, 41, 72, ${(props) => (props.$isDisabled ? '0.2' : '1')});
`;

export const DeleteButton = styled.button`
  padding: 10px 20px;
  margin: 20px 0;
  border-radius: 10px;
  color: rgba(11, 41, 72,1);
  background: transparent;
  border: 2px solid
    rgba(11, 41, 72, 1)});
`;
