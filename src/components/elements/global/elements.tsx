import styled from 'styled-components'
import breakpoints from '../../../settings/css/breakpoints'

export const Container = styled.div`
    width: 100%;
`

export const Wrapper = styled.div`
    width: 100%;
    margin: auto;
    max-width: 1000px;
    padding: 0;
    @media only screen and (min-width: ${breakpoints.sm}px){

    }
`

export const ModalContainer = styled.div`
    position: fixed;
    left: 10%;
    right: 10%;
    top: 20%;
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
