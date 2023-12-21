import styled from 'styled-components';
import breakpoints from '../../../settings/css/breakpoints';

export const Container = styled.div<{
  $isActive: boolean;
}>`
  width: 60%;
  position: relative;
`;

export const Wrapper = styled.div<{
  $isActive: boolean;
}>`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  left: ${(props) => (props.$isActive ? '0' : '-200%')};
  width: 100%;
  height: 100%;
  transition: 500ms;
`;
