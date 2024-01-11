import styled from 'styled-components';
import breakpoints from '../../../../settings/css/breakpoints';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.button<{
  $isDisabled: boolean;
}>`
  border: 2px solid  rgba(11, 41, 72, ${(props) => props.$isDisabled ? "0.2" : "1"});
  border-radius: 10px;
  padding: 10px 20px;
  color: rgba(11, 41, 72, ${(props) => props.$isDisabled ? "0.2" : "1"});
  transition: 500ms;
  @media only screen and (min-width: ${breakpoints.sm}px) {
    width: 135px;
  }
`;

export const ButtonText = styled.p`
  @media only screen and (max-width: ${breakpoints.sm}px) {
    display: none;
  }
`;

export const IconContainer = styled.div`
  @media only screen and (min-width: ${breakpoints.sm}px) {
    display: none;
  }
`;

