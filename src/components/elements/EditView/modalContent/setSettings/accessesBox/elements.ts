import styled from 'styled-components';
import breakpoints from '../../../settings/css/breakpoints';

export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const List = styled.ul`
  height: 200px;
  border: 2px solid black;
  width: 100%;
  max-width: 300px;
  overflow: auto;
`;

export const ListElement = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
`;

export const ListElementTitle = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListElementIconButton = styled.button`
  border: none;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;
