import styled from 'styled-components'
import breakpoints from '../../../settings/css/breakpoints'
import AuthBackground from '../../../assets/global/AuthBackground.jpg';

export const Container = styled.div`
    width: 100%;
  overflow: hidden;

`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    padding: 0;
    margin-left: 250px;
    @media only screen and (min-width: 1500px){
        margin: auto;
    }
    @media only screen and (max-width: 1200px){
         margin: auto;
    }
`

export const LoadingWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
    position: fixed;
    left: 10%;
    right: 10%;
    top: 20%;
        @media only screen and (min-width: ${breakpoints.lg}px){
    left: 30%;
    right: 30%;
    top: 20%;
    }
    -webkit-box-shadow: 0px 0px 48px 0px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 0px 48px 0px rgba(66, 68, 90, 1);
    box-shadow: 0px 0px 48px 0px rgba(66, 68, 90, 1);
`

export const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: white;
    padding: 0 10px;

`
// left: 250px;

export const ModalBackground = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    background: rgba(176, 214, 235, 0.28);
    z-index: 11;
`

export const ModalTitle = styled.h3`
    text-align: center;
    font-size: 30px;
    margin-top: 15px;
    margin-bottom: 15px;
`

export const DeleteSetButton = styled.button`
    padding: 10px 20px;
    margin: 20px 0;
    border: 2px solid  #33BBCF;
    border-radius: 10px;
    color: #33BBCF;
`

export const AutPageBoxTitle = styled.h1`
    margin: auto;
    color: white;
    font-size: 30px;
`

export const AuthButton = styled.button`
    width: 100%;
    border-radius: 10px;
    color: black;
    background: white;
    padding: 10px 0;
    border: none;
    cursor: pointer;
`

export const AuthErrorParagraph = styled.p`
    color: red;

`

export const AuthPageContainer = styled.div`
    height: 100vh;
    display: flex;
    background-image: url(${AuthBackground});
`
