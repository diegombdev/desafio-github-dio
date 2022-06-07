import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-self: flex-start;
    margin-top: 250px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.3);
`
export const Phrase = styled.p`
    font-weight: 700;
    font-size: 20px;
`

export const Author = styled.p`
    font-size: 16px;
    font-weight: bold;
    text-align: end;
`

export const Button = styled.button`
    height: 35px;
    width: 200px;
    border: 0;
    margin: auto;
    background: #eb8334;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    cursor: pointer;
`