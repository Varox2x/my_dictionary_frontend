import styled from 'styled-components';
import breakpoints from '../../../settings/css/breakpoints';

export const Column = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

export const CreateWordWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ResourceTitle = styled.p`
  width: 100%;
  text-align: center;
`;

export const AddButton = styled.button`
  padding: 10px 20px;
  margin: 20px 0;
  border: 2px solid #33bbcf;
  border-radius: 10px;
  color: #33bbcf;
`;
