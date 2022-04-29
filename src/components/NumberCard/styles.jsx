import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${props => props.background || '#BD00FF88'};
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 50px;
    font-weight: bold;
`