import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  padding-right: 20px;
`;

export const UnderMenuTitle = styled.p`
  margin-bottom: 20px;
  color: #ffffff;
  opacity: 0.3;
`;

export const UnderMenu = styled.ul``;

export const PageLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  padding: 50px 0;
  color: #ffffff;
`;

export const MenuElement = styled.li`
  padding: 20px 0;
  position: relative;
  &:after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: #ffffff;
    opacity: 0.3;
  }
`;

export const MenuElementTitle = styled.p`
  color: #ffffff;
  text-align: center;
`;

export const PageTitle = styled.p`
  text-align: center;
  text-decoration: none;
  color: inherit;
`;
