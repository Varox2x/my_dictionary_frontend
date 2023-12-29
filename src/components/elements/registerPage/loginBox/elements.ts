import styled from 'styled-components';
import breakpoints from '../../../settings/css/breakpoints';

export const Container = styled.div`
  margin: auto;
  border: 2px solid rgba(255, 255, 255, 0.2);
  max-width: 500px;
  width: 100%;
  display: flex;
  border-radius: 10px;

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`;

export const Wrapper = styled.div`
  margin: auto;
  max-width: 270px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HaveAccount = styled.a`
  white-space: nowrap;
  color: black;
  color: white;
  font-size: 15px;
`;

export const Form = styled.form`
  margin: auto;
  max-width: 270px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div<{
  $margin?: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.$margin || ''};
`;

export const Label = styled.label<{
  $fieldError?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: cetner;
  border-bottom: 2px solid
    ${(props) => (props.$fieldError ? 'red' : 'rgba(255, 255, 255, 0.2)')};
  padding-bottom: 5px;
  width: 100%;
`;
