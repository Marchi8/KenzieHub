import styled from "styled-components";

const Main = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

header{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 100px;
    flex-direction: row;
    height: 73px;
    border-bottom: 1px solid #212529;
    width: 100vw;
}

@media(min-width:1024px) {
       header{
        gap: 500px;
       }
        }

header>h1{
    color:#FF577F;
    font-size: 20px;
    white-space: nowrap;
    font-family: 'Inter';
    font-style: normal;
}

a{
    text-decoration: none;
}

button{
    background: #212529;
    border: 1px solid #212529;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;
    width: 55.49px;
    height: 32px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;
    text-align: center;
    color: #F8F9FA;
    cursor: pointer;
}

div{
    border-bottom: 1px solid #212529;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: flex-start;
    width: 100vw;
    height: 131px;
}

@media(min-width:1024px) {
        div {
            align-items: center;
            justify-content: space-evenly;
            gap: 500px;
            flex-direction: row;
            height: 118px;
            text-align: center;
        }

        div>h2{
            margin-left: -50px !important;
            margin-bottom: 40px !important;
        }
    }

div>h2{
    color: #F8F9FA;
    margin-top: 35px;
    margin-bottom: -5px;
    width: 151px;
    height: 28px;
    text-align: start;
    margin-left: -140px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
}

div>p{
    text-align: start;
    margin-left: -200px;
    height: 22px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868E96;
}

section{
    display: none;
}

@media(min-width:1024px) {
        section {
            display:flex;
            flex-direction: column;
            margin-right: 250px;
        }

        section > h3{
            color: #F8F9FA;
            width: 375px;
            height: 28px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 28px;
        }

        section > p{
            color: #F8F9FA;
            width: 550px;
            height: 25px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
        }
    }
`

export { Main }