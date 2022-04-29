import styled from 'styled-components'

export const MapContainer = styled.div`
    width: 50vh;
    height: 50vh;
    border-radius: 12px;
    border: 2px solid black;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

export const HorizontalMapDivisor = styled.div`
    width: 100%;
    height: 2px;
    background-color: black;
    position: absolute;
    top: ${props => props.top};
`

export const VerticalMapDivisor = styled.div`
    width: 2px;
    height: 100%;
    background-color: black;
    position: absolute;
    left: ${props => props.left};
`