import styled from 'styled-components'
import breakpoints from '../../../settings/css/breakpoints'

export const Container = styled.div`
    width: 100%;
`

export const Wrapper = styled.div`
    width: 100%;
    margin: auto;
    max-width: 1000px;
    padding: 0 25px;
    @media only screen and (min-width: ${breakpoints.sm}px){
        padding: 0;
    }
    border: 2px solid red;
`

export const ModalContainer = styled.div`
    position: fixed;
    left: 30%;
    right: 30%;
    top: 30%;
    background: white;
`

export const ModalWrapper = styled.div`
    width: 100%;
    border: 2px solid blue;
`

export const ModalBackground = styled.div`
    position: fixed;
    left: 250px;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(176, 214, 235, 0.28);
`
