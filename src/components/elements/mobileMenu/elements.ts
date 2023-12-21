import styled from 'styled-components';

export const Container = styled.div<{
  $isActive: boolean;
}>`
  position: fixed;
  top: 0;
  bottom: 0;
  color: blue;
  font-size: 20px;
  left: ${(props) => (props.$isActive ? '0' : '-100%')};
  transition: 850ms;
  z-index: 9999;
  border: 2px solid purple;
  width: 100vw;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  z-index: 9999;
`;

export const Nav = styled.nav`
  width: 40%;
  background: rgba(0, 0, 0, 0.95);
  height: 100%;
`;

export const Menu = styled.div`
  padding-top: 100px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`;

export const UnderMenuTitle = styled.p`
  margin-bottom: 20px;
`;

export const UnderMenu = styled.ul`
  margin-bottom: 35px;
  margin-left: 20px;
`;

export const MenuElement = styled.li`
  margin-bottom: 15px;
`;
