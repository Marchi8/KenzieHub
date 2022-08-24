import styled from "styled-components";

export const Li = styled.li`

background-color: aqua;
width: 87vw;
height: 48.73px;
background: #121214;
border-radius: 4px;
display: flex;
align-items: center;
justify-content: space-evenly;
gap: 30px;
color: #F8F9FA;
cursor: pointer;

:hover{
    background: #343B41;
}

@media(min-width:946px) {
    width: 742px;
    justify-content: space-between;
    }

h1{
    margin-left: 12px;
    width: 180.7px;
    height: 24.36px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

p{
    width: 78.17px;
    height: 22.33px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;
    text-align: right;
    color: #868E96;
}

button{
    width: 35px;
    height: 30px;
    padding: 0;
    background: none;
    border: none;
}

@media(min-width:946px) {
    button{
        margin-left: -350px;
    }
    }

button:hover{
    border: 2px solid white;
}
`