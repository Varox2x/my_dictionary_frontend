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
