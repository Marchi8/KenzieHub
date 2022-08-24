import styled from "styled-components";

export const ModalBackground = styled.section`

background: rgba(18, 18, 20, 0.5);
opacity: 0.9;
z-index: 2;
width: 100vw;
height: 100vh;
position: fixed;
top: 0px;

`

export const ModalAdd = styled.aside`

background-color: aqua;
position: fixed;
width: 296px;
height: 230px;
top: 189px;
z-index: 3;
background: #212529;
box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
border-radius: 4px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: 68px 22px 32px;
gap: 22px;

header{
    background: #343B41;
    border-radius: 4px 4px 0px 0px;
    width: 296px;
    padding: 0px 22px 0px;
    margin-top: -66.61px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

header>h4{
    width: 147px;
    height: 24px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #F8F9FA;
}

header>button{
    width: 11px;
    height: 26px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: #868E96;
    background:none;
    border: none;
}

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 296px;
}

form>div{
    width: 296px;
    height: 60.16px;
    gap: 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 20px;
    margin-bottom: 6px;
}

form>div>label{
    background-color: #F8F9FA;
    color: #F8F9FA;
    width: 100px;
    text-align: left;
    height: 0px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    margin-bottom: 20px;
    margin-top: -10px;
}

span{
    color: red;
    margin-bottom: 0px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12.8px;
}

form>div>input{    
    border: 0.9772px solid #F8F9FA;
    border-radius: 3.20867px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 13.0293px;
    gap: 8.14px;
    background: #343B41;
    color: #F8F9FA;
    width: 265px;
    height: 38.5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
}

form>div>select{    
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 13.0293px;
    gap: 8.14px;
    width: 294px;
    height: 38.5px;
    background: #343B41;
    color: #F8F9FA;
    border: 0.9772px solid #F8F9FA;
    border-radius: 3.20867px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    margin-bottom: 0px;
    cursor: pointer;
}

form>button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;
    background: #FF577F;
    color: #FFFFFF;
    border: 1.2182px solid #FF577F;
    border-radius: 4.06066px;
    margin-top: 16px;
    width: 290px;
    height: 38.5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
}
`