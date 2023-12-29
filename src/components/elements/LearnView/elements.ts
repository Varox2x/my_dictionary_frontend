import styled from 'styled-components';
import breakpoints from '../../../settings/css/breakpoints';

export const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  height: 100vh;
  position: relative;
`;

export const CardContainer = styled.div<{
  $isrevert: boolean;
}>`
  height: 300px;
  width: 80vw;
  border-radius: 10px;
  position: relative;

  transform-style: preserve-3d;
  transition: transform 0.5s;
  transform: rotateX(${(props) => (props.$isrevert ? '180deg' : '0')});
  perspective: 600px;

  @media only screen and (min-width: ${breakpoints.sm}px) {
    height: 300px;
    width: 500px;
  }
  -webkit-box-shadow: 0px ${(props) => (props.$isrevert ? '-' : '')}18px 62px -8px
    rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px ${(props) => (props.$isrevert ? '-' : '')}18px 62px -8px rgba(66, 68, 90, 1);
  box-shadow: 0px ${(props) => (props.$isrevert ? '-' : '')}18px 62px -8px rgba(66, 68, 90, 1);
`;

export const FrontSide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;

  background-color: #3498db;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #fff;

  box-shadow:
    0 0.125em 0.3125em rgba(0, 0, 0, 0.25),
    0 0.02125em 0.06125em rgba(0, 0, 0, 0.25);

  border-radius: 10px;

  overflow: hidden;
`;

export const DefaultStageList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 70px 0;
`;

export const DefaultStageListElement = styled.li``;

export const SingleText = styled.p`
  text-align: left;
`;

export const BackSide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;

  background-color: #e74c3c;
  transform: rotateX(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #fff;

  border-radius: 10px;

  overflow: hidden;
`;

export const CardSpaceContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ControllerAreaContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const ControllerAreaWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const ControllAreaLeftSide = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  bottom: 20%;
  width: 50%;

  z-index: 1;
`;

export const ControllAreaRightSide = styled.div`
  position: absolute;
  top: 20%;
  right: 0;
  bottom: 20%;
  width: 50%;

  z-index: 1;
`;

export const ControllAreaTopSide = styled.div`
  position: absolute;
  top: 0;
  right: 20%;
  left: 20%;
  height: 50%;

  z-index: 1;
`;

export const ControllAreaBottomSide = styled.div`
  position: absolute;
  right: 20%;
  left: 20%;
  bottom: 0;
  height: 50%;

  z-index: 1;
`;

export const StageWrapper = styled.div<{
  offset: number;
}>`
  position: absolute;
  left: 0;
  right: 0;
  top: ${(props) => props.offset};
  height: 100%;
  overflow: hidden;
`;

export const SingleStageWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(156, 30, 217, 0.34);
  backdrop-filter: blur(3px);
`;

export const ActionMenuWrapper = styled.div<{
  side: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  position: absolute;
  ${(props) => props.side}: 10%;
  z-index: 50;
  top: 10%;
`;

export const ActionMenuButton = styled.button``;

export const ProgressBarWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items; center;
`;

export const InputStageWrapper = styled.div<{
  background: string;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background};
  transition: 500ms;
`;

export const Input = styled.input`
  width: 70%;
  border: none;
  background: transparent;
  border-bottom: 2px solid blue;
  text-align: center;
  color: white;
`;

export const CheckButton = styled.button`
  background: transparent;
  border: none;
`;
