import styled from "styled-components";

const Header = styled.header`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 30px;

    h1{
        color: #FF577F;
        margin-bottom: 0px;
        margin-top: 50px;
        color:#FF577F;
        font-weight: 700;
        font-size: 19px;
        font-family: 'Inter';
        font-style: normal;
    }

    @media(min-width:946px) {
        h1{
           font-size: 25px;
           margin-top: 45px;
        }
    }

    a{
        text-decoration: none;
    }

    button{
        background: #212529;
        border: 1px solid #212529;
        color: #F8F9FA;
        border-radius: 4px;
        width: 79.54px;
        height: 31.95px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 16.2426px;
        gap: 10.15px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 9.59437px;
        line-height: 23px;
        text-align: center;
        cursor: pointer;
    }

    @media(min-width:946px) {
        button{
            width: 67.49px;
            height: 40.11px;
            font-size: 12px;
            line-height: 28px;
        }
    }
`

const Section = styled.section`

form {
    background: #212529;
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 3.19812px;
    width: 295.83px;
    height: 709.96px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

@media(min-width:946px) {
        form{
            width: 370px;
            height: 891.19px;
        }
    }

h1{
    width: 101.54px;
    height: 22.39px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 14.3916px;
    line-height: 22px;  
    color: #F8F9FA;
    margin-left: 80px;
    margin-top: -10px;
}

@media(min-width:946px) {
        h1{
            width: 127px;
            height: 28px;
            font-size: 18px;
            line-height: 28px;
            margin-top: -60px;
            margin-left: 95px;
        }
    }

p{
    width: 132.72px;
    height: 17.59px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 9.59437px;
    line-height: 18px;
    color: #868E96;
    margin-left: 65px;
    margin-bottom: 20px;
}

@media(min-width:946px) {
        p{
            width: 166px;
            height: 22px;
            font-size: 12px;
            line-height: 22px;
            margin-left: 75px;
            margin-bottom: 30px;
            margin-top: 0px;
        }
    }

div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 90%;
    height: 709.96px;
}

label {
    color: #F8F9FA;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 9.73988px;
    margin-bottom: 15px;
    width: 86px;
    height: 5px;
    display: flex;
}

@media(min-width:946px) {
        label {
            font-size: 12.182px;
            width:auto;
        }
    }


input {
    background: #343B41;
    color: #F8F9FA;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 12.9865px;
    gap: 8.12px;
    width: 240px;
    height: 38.38px;
    border: 0.973988px solid #343B41;
    border-radius: 3.19812px;
    margin-bottom: 15px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12.9865px;
    line-height: 21px;
}

@media(min-width:946px) {
        input {
            width: 310px;
            height: 48px;
            font-size: 16.2426px;
            line-height: 26px;
            margin-bottom: 25px;
        }
    }

input:focus {
    border: 0.9772px solid #F8F9FA;
  }

  select{
    background: #343B41;
    color: #868E96;
    border: 0.973988px solid #343B41;
    border-radius: 3.19812px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 12.9865px;
    gap: 8.12px;
    width: 270px;
    height: 38.38px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12.9865px;
    line-height: 21px;
    margin-bottom: 16px;
  }

  @media(min-width:946px) {
        select {
            width: 335px;
            height: 48px;
            margin-bottom: 20px;
        }
    }

  button{
    background: #59323F;
    border: 1.2182px solid #59323F;
    color: #FFFFFF;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;
    width: 260.65px;
    height: 38.38px;
    margin-bottom: -20px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 12.7925px;
    line-height: 21px;
    cursor: pointer;
  }

  @media(min-width:946px) {
        button {
            width: 326px;
            height: 48px;
            font-size: 16px;
            line-height: 26px;
            margin-top: 20px;
            margin-bottom: -250px;
        }
    }

  section{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 295.83px;
  }

  ul{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    list-style: none;
    gap: 10px;
    margin-left: -40px;
}

li{
    color: #F8F9FA;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    text-align: start;
  }
`

export { Section, Header }