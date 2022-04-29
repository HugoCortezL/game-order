import styled from 'styled-components'

export const Container = styled.div`
    h1{
        height: 40px;
        width: 100vw;
        text-align: center;
        margin-top: 10px;
    }
`

export const GameSetup = styled.div`
    height: calc(100vh - 50px);
    width: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`

export const TutorialButton = styled.button`
    font-size: 16px;
    font-weight: bold;
    color: white;
    padding: 5px 10px;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;
`

export const AboutGameContainer = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        font-size: 18px;
        color: white;
    }
`

export const RestartButton = styled.button`
    font-size: 18px;
    font-weight: bold;
    color: white;
    padding: 10px 15px;
    background-color: #BD00FF;
    border: none;
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    cursor: pointer;
`