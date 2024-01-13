import styled from 'styled-components';

export const Wrapper = styled.li<{ $display?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  ${(props) => (props.$display ? 'display: none;' : '')}
  z-index: 1;
`;
