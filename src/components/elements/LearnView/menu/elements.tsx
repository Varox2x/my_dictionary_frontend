import styled from 'styled-components'

export const Icon = styled.img<{
    $isActive: boolean,
    $isDisable: boolean
}>`
    width: 40px;
    height: 40px;
    filter:${(props) => props.$isActive ? "" : "grayscale(100%)"} ;
    opacity:${(props) => props.$isDisable && !props.$isActive ? "7%" : "100%"};
    transition: 200ms;

`

export const Button = styled.button`
    background: transparent;
    border: none;

`

export const FiltrMask = styled.div<{
    $isActive: boolean;
}>`
position: absolute;
top: -40px;
left: -40px;
right: -40px;
bottom: -40px;
${(props) => props.$isActive ? "background: rgb(0,212,255); background: radial-gradient(circle, rgba(0,212,255,0.4410539215686274) 0%, rgba(255,255,255,0) 80%);" : ""}
filter: blur(12px);
`
