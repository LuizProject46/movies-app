import styled from "styled-components"

export const  Container  = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;

`

export const InputArea = styled.div`
width:100%;
max-width: 900px;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;

`

export const ListArea = styled.div`
width:100%;
max-width: 950px;
height: auto;
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;


`

export const Content = styled.div`
width:100%;
max-width: 300px;
height: 200px;
display: flex;
justify-content: center;
align-items: center;
background: var(--white);
border-radius: 10px;
margin: 10px 5px;
flex-direction: column;
cursor: pointer;

`

export const ContentTitle = styled.h3`
    color: #333;
    margin-top: 10px;
`

export const ImageArea = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    justify-content: center;

    & > img {
        width: 280px;
        height: 150px;
        border-radius: 8px;
    }

`