import styled from "styled-components";

const Main = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

header{
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 100px;
    height: 73px;
    border-bottom: 1px solid #212529;
    width: 100vw;
}

@media(min-width:946px) {
       header{
        /* background-color: #FF577F; */
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
    margin-right: 10px;
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

@media(min-width:946px) {
        div {
            align-items: center;
            justify-content: space-evenly;
            gap: 500px;
            flex-direction: row;
            height: 118px;
            text-align: center;
        }

        div>h2{
            margin-left: 0px !important;
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 90vw;
}

section>div{
    border: none;
    height: 32px;
    margin-top: 22px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 145px;
    flex-direction: row;
    color: #F8F9FA;
}

@media(min-width:946px) {
    section>div{
        width: 779.73px;
        justify-content: space-between;
    }
    }

section>div>button{
    width: 32.49px;
    height: 32px;
    border-radius: 4px;
    font-size: 25px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 500;
    padding: 0px 0px 0px 0px;
}

section>div>h3{
    color: #F8F9FA;
    width: 94px;
    height: 18px;   
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
}

ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 22px 19px;
    gap: 16px;
    width: 85vw;
    background: #212529;
    border-radius: 4px;
}

@media(min-width:946px) {
    
    section {
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        
        section >div> h3{
            color: #F8F9FA;
            width: 94px;
            height: 18px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 28px;
        }

        ul{
            width: 779.73px;
        }
    }
`

export { Main }