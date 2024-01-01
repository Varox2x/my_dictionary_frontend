import styled from 'styled-components';
import breakpoints from '../../../settings/css/breakpoints';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const List = styled.ul`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-top: 80px;
`;

export const ListElement = styled.li`
  margin: 20px 0;
  margin-left: 45px;
  text-align: left;
  text-decoration: none;
  color: #ffffff;
  position: relative;
  &:after {
    position: absolute;
    content: '';
    bottom: -10px;
    left: -40px;
    right: 5px;
    height: 1px;
    background: #ffffff;
    opacity: 0.1;
  }
`;
