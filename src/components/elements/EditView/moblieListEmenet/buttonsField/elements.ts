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
  transition: 200ms;
  opacity: ${(props) => (props.$isDisabled ? '0.2' : '1')};
  color: #3e2265;
  background: transparent;
  border: 2px solid #3e2265;
  letter-spacing: 1px;
  font-weight: 900;
`;

export const DeleteButton = styled.button`
  padding: 10px 20px;
  margin: 20px 0;
  border-radius: 10px;
  color: #3e2265;
  background: transparent;
  border: 2px solid #3e2265;
  letter-spacing: 1px;
  font-weight: 900;
`;
