import styled from 'styled-components';

export const SliderContainer = styled.div<{
  translate: number;
}>`
  width: 200%;
  height: 100%;
  position: relative;
  transform: translateX(${(props) => props.translate}%);
  transition: 300ms;
`;

export const SliderElement = styled.div<{
  translate: number;
}>`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  transform: translateX(${(props) => props.translate}%);
  transition: 200ms;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: 55;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ArrowLeft = styled.button<{
  $visible: boolean;
}>`
  z-index: 555;
  opacity: ${(props) => (props.$visible ? '0' : '100%')};
  background: transparent;
  border: none;
`;

export const ArrowRight = styled.button<{
  $visible: boolean;
}>`
  z-index: 555;
  opacity: ${(props) => (props.$visible ? '0' : '100%')};
  background: transparent;
  border: none;
`;
